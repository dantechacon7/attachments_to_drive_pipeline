# Arquitetura do Pipeline

## Visão geral

O pipeline realiza a ingestão e organização de arquivos anexados em sistemas externos.

---

## Fluxo

1. **Busca (API)**

   * Query configurável (ex: JQL)
   * Retorna tickets com anexos

2. **Processamento**

   * Extração de metadados
   * Identificação de entidade (ex: CPF, ID, cliente)
   * Consolidação de anexos

3. **Deduplicação**

   * Controle por ID único do anexo
   * Evita downloads repetidos

4. **Armazenamento**

   * Criação de pastas dinâmicas
   * Upload para Google Drive

---

## Componentes

### Apps Script

Responsável por:

* chamadas HTTP (UrlFetchApp)
* parsing JSON
* manipulação de arquivos no Drive

---

## Padrões utilizados

### 1. Deduplicação por ID

Garante consistência e economia de recursos.

### 2. Organização por entidade

Facilita auditoria e rastreabilidade.

### 3. Verificação pré-download

Evita sobrescrita e duplicidade.

### 4. Segurança

Credenciais armazenadas via PropertiesService.

---

## Benefícios

* Centralização de evidências
* Redução de esforço manual
* Escalabilidade
* Melhoria de governança de dados
