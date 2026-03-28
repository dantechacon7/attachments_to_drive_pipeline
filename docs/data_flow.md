# Fluxo de Dados

## Etapas do processamento

### 1. Autenticação

* Geração de header Basic Auth (Base64)
* Uso de credenciais seguras

---

### 2. Consulta

* Requisição POST para API de busca
* Filtro por itens com anexos

---

### 3. Iteração por registros

Para cada item retornado:

* Identifica entidade associada (campo customizado)
* Define estrutura de pasta

---

### 4. Coleta de anexos

#### Nível 1: Anexos principais

* Arquivos diretamente associados ao item

#### Nível 2: Comentários

* Busca anexos dentro de comentários

---

### 5. Deduplicação

* Controle via mapa de IDs já processados

---

### 6. Download e armazenamento

Para cada anexo:

* Verifica se já existe no Drive
* Faz download via URL do arquivo
* Salva como Blob na pasta correta

---

## Resultado

Estrutura organizada no Drive:

```bash
Registro de análise/
   ├── Entidade 1/
   │   ├── TICKET-123_arquivo.pdf
   │   └── TICKET-123_print.png
   │
   ├── Entidade 2/
   │   └── TICKET-456_doc.xlsx
```

---

## Observação

A estrutura pode ser adaptada para qualquer chave de organização:

* CPF
* ID do cliente
* Número do ticket
* Categoria
