function processarAnexosParaDrive() {
  var scriptProperties = PropertiesService.getScriptProperties();

  var apiDomain = scriptProperties.getProperty('apiDomain');
  var apiUser = scriptProperties.getProperty('apiUser');
  var apiToken = scriptProperties.getProperty('apiToken');
  var rootFolderId = scriptProperties.getProperty('rootFolderId');
  var ENTITY_FIELD_ID = scriptProperties.getProperty('entityFieldId');
  var query = scriptProperties.getProperty('query');
  var folderPrefix = scriptProperties.getProperty('folderPrefix') || "Registro";

  var urlBusca = "https://" + apiDomain + "/rest/api/3/search";

  var authHeader = "Basic " + Utilities.base64Encode(apiUser + ":" + apiToken);

  var payload = {
    jql: query,
    maxResults: 50,
    fields: ["attachment", "key", ENTITY_FIELD_ID, "comment"]
  };

  var options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: authHeader,
      Accept: "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    var response = UrlFetchApp.fetch(urlBusca, options);
    var dados = JSON.parse(response.getContentText());
    if (!dados.issues) return;

    var pastaPrincipal = DriveApp.getFolderById(rootFolderId);

    dados.issues.forEach(function(issue) {
      try {
        var entidade = extrairValorCampo(issue.fields[ENTITY_FIELD_ID]);
        var nomeSubpasta =
          folderPrefix + "; ID: " +
          (entidade ? entidade.toString().trim() : "NAO_INFORMADO_" + issue.key);

        var subpastas = pastaPrincipal.getFoldersByName(nomeSubpasta);
        var subpastaDestino = subpastas.hasNext()
          ? subpastas.next()
          : pastaPrincipal.createFolder(nomeSubpasta);

        var listaAnexos = coletarAnexos(issue);
        var anexosUnicos = deduplicarAnexos(listaAnexos);

        anexosUnicos.forEach(function(anexo) {
          var nomeArquivo = issue.key + "_" + anexo.filename;

          try {
            if (!arquivoJaExiste(subpastaDestino, nomeArquivo)) {
              var arquivoBlob = baixarArquivo(anexo.content, authHeader);
              if (!arquivoBlob) return;

              subpastaDestino.createFile(arquivoBlob).setName(nomeArquivo);
              console.log("✓ Salvo: " + nomeArquivo);
            }
          } catch (e) {
            console.error("Erro no download: " + e.message);
          }
        });

      } catch (e) {
        console.error("Erro ao processar issue: " + issue.key + " | " + e.message);
      }
    });

    console.log("=== Fim do Processamento ===");

  } catch (errGeral) {
    console.error("Erro Crítico: " + errGeral.toString());
  }
}

/**
 * ============================================================
 * FUNÇÕES AUXILIARES
 * ============================================================
 */

function extrairValorCampo(valor) {
  if (!valor) return null;

  if (typeof valor === "string") return valor;
  if (valor.value) return valor.value;
  if (valor.name) return valor.name;

  return null;
}

function coletarAnexos(issue) {
  var lista = [];

  // Nível 1: anexos do ticket
  if (issue.fields.attachment) {
    lista = lista.concat(issue.fields.attachment);
  }

  // Nível 2: anexos em comentários
  if (issue.fields.comment && issue.fields.comment.comments) {
    issue.fields.comment.comments.forEach(function(c) {
      if (c.attachments) {
        lista = lista.concat(c.attachments);
      }
    });
  }

  return lista;
}

function deduplicarAnexos(lista) {
  var anexosUnicos = [];
  var processedIds = {};

  lista.forEach(function(a) {
    if (!processedIds[a.id]) {
      anexosUnicos.push(a);
      processedIds[a.id] = true;
    }
  });

  return anexosUnicos;
}

function arquivoJaExiste(folder, nomeArquivo) {
  return folder.getFilesByName(nomeArquivo).hasNext();
}

function baixarArquivo(url, authHeader) {
  try {
    var response = UrlFetchApp.fetch(url, {
      method: "get",
      headers: { Authorization: authHeader },
      muteHttpExceptions: true
    });

    if (response.getResponseCode() !== 200) return null;

    return response.getBlob();

  } catch (e) {
    console.error("Erro ao baixar arquivo: " + e.message);
    return null;
  }
}
