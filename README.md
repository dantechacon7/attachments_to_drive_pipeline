# Attachments to Drive Pipeline

Pipeline automatizado para extração de anexos de sistemas de gestão (ex: Jira) e organização estruturada no Google Drive.

---

## 📌 Problema

Arquivos anexados em sistemas operacionais:

* Estão distribuídos entre registros e comentários
* Não possuem organização centralizada
* São difíceis de auditar em escala
* Podem gerar duplicidade

---

## ⚙️ Solução

Este projeto automatiza:

1. Busca de registros via API
2. Coleta de anexos (incluindo comentários)
3. Deduplicação por ID
4. Organização em pastas no Drive
5. Verificação de arquivos já existentes

---

## 🔁 Fluxo

Sistema → API → Apps Script → Google Drive

---

## 🧠 Principais capacidades

* Extração multinível (registro + comentários)
* Organização por identificador configurável
* Deduplicação real por ID de anexo
* Prevenção de reprocessamento
* Estrutura de pastas dinâmica
* Autenticação segura via PropertiesService

---

## 📂 Estrutura de pastas

```bash
Registro; ID: 123456
   ├── ISSUE-1_documento.pdf
   ├── ISSUE-1_print.png

Registro; ID: 789012
   └── ISSUE-2_relatorio.xlsx
```

---

## ▶️ Como utilizar

Configure as propriedades do script:

* apiDomain → domínio da API
* apiUser → usuário/email
* apiToken → token
* rootFolderId → pasta raiz no Drive
* entityFieldId → campo usado para organização
* query → filtro de busca (ex: JQL do Jira)
* folderPrefix → prefixo das pastas

Execute:

```javascript
processarAnexosParaDrive()
```

---

## ⚠️ Observações

* Compatível com APIs REST que retornam anexos
* Estrutura adaptável para qualquer entidade
* Pode ser usado para auditoria, compliance ou operações

---

## 🧠 Insight

Este projeto transforma arquivos dispersos em sistemas operacionais em uma estrutura organizada e auditável, pronta para uso analítico e regulatório.
