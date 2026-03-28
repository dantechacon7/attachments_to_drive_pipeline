# Fluxo de Dados

## Etapas do processamento

### 1. Autenticação

* Geração de header Basic Auth (Base64)
* Uso de credenciais armazenadas de forma segura

---

### 2. Consulta

* Requisição POST para API de busca
* Aplicação de query configurável (ex: JQL)
* Retorno de registros com anexos

---

### 3. Iteração por registros

Para cada registro retornado:

* Identifica a entidade associada (campo configurável)
* Define dinamicamente a estrutura de pasta no Drive

---

### 4. Coleta de anexos

#### Nível 1: Anexos principais

* Arquivos diretamente associados ao registro

#### Nível 2: Interações (ex: comentários)

* Busca anexos adicionados durante interações

---

### 5. Deduplicação

* Controle via mapa de IDs já processados
* Garante que cada anexo seja tratado apenas uma vez

---

### 6. Download e armazenamento

Para cada anexo:

* Verifica se o arquivo já existe no Drive
* Realiza o download via URL do arquivo
* Converte para Blob
* Salva na pasta correspondente

---

## Resultado

Estrutura organizada no Google Drive:

```bash id="flow_struct"
Registro; ID: 123456
   ├── ISSUE-1_arquivo.pdf
   ├── ISSUE-1_print.png

Registro; ID: 789012
   └── ISSUE-2_doc.xlsx
```

---

## Observação

A estrutura pode ser adaptada para qualquer chave de organização:

* CPF
* ID do cliente
* Número do registro
* Categoria

A lógica permanece a mesma, alterando apenas o campo de referência utilizado.
