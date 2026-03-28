# Arquitetura do Pipeline

## Visão geral

O pipeline realiza a ingestão e organização de arquivos anexados em sistemas externos, transformando dados dispersos em uma estrutura centralizada e auditável no Google Drive.

---

## Fluxo

1. **Busca (API)**

   * Query configurável via propriedades (ex: JQL ou equivalente)
   * Retorna registros (ex: tickets) que possuem anexos

2. **Processamento**

   * Extração de metadados do registro
   * Identificação da entidade a partir de campo configurável (ex: CPF, client_id, account_id)
   * Consolidação de anexos em uma única lista

3. **Deduplicação**

   * Controle por ID único do anexo
   * Garante que cada arquivo seja processado apenas uma vez

4. **Armazenamento**

   * Criação de pastas dinâmicas com base na entidade
   * Upload dos arquivos no Google Drive

---

## Componentes

### Apps Script

Responsável por:

* chamadas HTTP via `UrlFetchApp`
* parsing de respostas JSON
* manipulação de arquivos e pastas no Google Drive

---

## Padrões utilizados

### 1. Deduplicação por ID

Evita downloads repetidos e garante consistência dos dados.

---

### 2. Organização por entidade

Os arquivos são agrupados por um identificador configurável, facilitando auditoria e rastreabilidade.

---

### 3. Verificação pré-download

Antes de baixar, o script verifica se o arquivo já existe no destino.

---

### 4. Segurança

Credenciais armazenadas via `PropertiesService`, evitando exposição no código.

---

### 5. Extração multinível

Captura anexos tanto no nível principal do registro quanto em interações associadas (ex: comentários).

---

## Benefícios

* Centralização de evidências
* Redução de esforço manual
* Escalabilidade operacional
* Melhoria de governança de dados
