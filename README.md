# Attachments to Drive Pipeline

Automação para extração de anexos de sistemas de gestão (ex: Jira) e armazenamento estruturado no Google Drive.

O projeto resolve um problema comum em operações analíticas e de compliance: garantir que evidências associadas a tickets estejam organizadas, acessíveis e auditáveis fora do sistema de origem.

---

## 📌 Problema

Arquivos anexados em sistemas como Jira:

* Ficam distribuídos entre tickets e comentários
* Não possuem organização centralizada
* São difíceis de auditar em escala
* Podem gerar duplicidade e retrabalho

---

## ⚙️ Solução

Este projeto implementa um pipeline automatizado que:

1. Busca tickets via API (usando filtros configuráveis)
2. Identifica e consolida anexos (incluindo comentários)
3. Organiza arquivos em pastas estruturadas
4. Evita downloads duplicados
5. Armazena tudo no Google Drive

---

## 🔁 Fluxo

Sistema de Tickets → API → Apps Script → Google Drive

---

## 🧠 Principais capacidades

* Extração de anexos em múltiplos níveis (ticket + comentários)
* Organização por entidade (ex: cliente, documento, ID)
* Deduplicação baseada em ID único do anexo
* Verificação de arquivos já existentes
* Armazenamento estruturado em pastas
* Autenticação segura via propriedades do script

---

## 📂 Estrutura do projeto

```bash
apps_script/    → Script de extração e upload
docs/           → Documentação técnica
```

---

## ▶️ Como utilizar

1. Configure as propriedades do script:

   * apiDomain
   * apiUser
   * apiToken
   * rootFolderId
   * customFieldId

2. Execute a função principal no Apps Script

3. Os arquivos serão organizados automaticamente no Drive

---

## ⚠️ Observações

* Compatível com qualquer sistema que exponha anexos via API REST
* Estrutura de pastas pode ser adaptada
* Campos customizados dependem da implementação
