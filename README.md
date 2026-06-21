# Attachments to Drive Pipeline

Automated pipeline for extracting attachments from management systems (e.g. Jira) and organizing them in a structured Google Drive hierarchy.

---

## [EN] Overview

### 📌 Problem

Attachments stored in operational systems:

* Are spread across records and comments
* Lack centralized organization
* Are difficult to audit at scale
* May generate duplicates

### ⚙️ Solution

This project automates:

1. Record retrieval through APIs
2. Attachment extraction (including comments)
3. Deduplication by attachment ID
4. Folder organization in Google Drive
5. Verification of previously processed files

### 🔁 Workflow

```
System → API → Apps Script → Google Drive
```

### 🧠 Key Features

* Multi-level extraction (records + comments)
* Configurable folder organization
* True deduplication by attachment ID
* Reprocessing prevention
* Dynamic folder structure
* Secure authentication via PropertiesService

### 📂 Folder Structure

```bash
Record; ID: 123456
   ├── ISSUE-1_document.pdf
   ├── ISSUE-1_screenshot.png

Record; ID: 789012
   └── ISSUE-2_report.xlsx
```

### ▶️ Usage

Configure the script properties:

* `apiDomain` → API domain
* `apiUser` → username/email
* `apiToken` → API token
* `rootFolderId` → Drive root folder
* `entityFieldId` → field used for organization
* `query` → search filter (e.g. Jira JQL)
* `folderPrefix` → folder prefix

Run:

```javascript
processAttachmentsToDrive()
```

### ⚠️ Notes

* Compatible with REST APIs that provide attachments
* Adaptable to any entity structure
* Suitable for audit, compliance and operational workflows

### 💡 Insight

This project transforms scattered files across operational systems into an organized and auditable structure, enabling analytical and regulatory use cases.

---

## [PT-BR] Visão Geral

### 📌 Problema

Arquivos anexados em sistemas operacionais:

* Estão distribuídos entre registros e comentários
* Não possuem organização centralizada
* São difíceis de auditar em escala
* Podem gerar duplicidade

### ⚙️ Solução

Este projeto automatiza:

1. Busca de registros via API
2. Coleta de anexos (incluindo comentários)
3. Deduplicação por ID
4. Organização em pastas no Drive
5. Verificação de arquivos já existentes

### 🔁 Fluxo

```
Sistema → API → Apps Script → Google Drive
```

### 🧠 Principais capacidades

* Extração multinível (registro + comentários)
* Organização por identificador configurável
* Deduplicação por ID do anexo
* Prevenção de reprocessamento
* Estrutura dinâmica de pastas
* Autenticação segura via PropertiesService

### 📂 Estrutura de pastas

```bash
Registro; ID: 123456
   ├── ISSUE-1_documento.pdf
   ├── ISSUE-1_print.png

Registro; ID: 789012
   └── ISSUE-2_relatorio.xlsx
```

### ▶️ Como utilizar

Configure as propriedades do script:

* `apiDomain` → domínio da API
* `apiUser` → usuário/e-mail
* `apiToken` → token
* `rootFolderId` → pasta raiz no Drive
* `entityFieldId` → campo usado para organização
* `query` → filtro de busca (ex.: JQL do Jira)
* `folderPrefix` → prefixo das pastas

Execute:

```javascript
processarAnexosParaDrive()
```

### ⚠️ Observações

* Compatível com APIs REST que retornam anexos
* Adaptável para qualquer entidade
* Pode ser utilizado para auditoria, compliance ou operações

### 💡 Insight

Este projeto transforma arquivos dispersos em sistemas operacionais em uma estrutura organizada e auditável, pronta para suportar análises e processos regulatórios.
