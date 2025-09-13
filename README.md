# ⚽ DIO Champions API

Bem-vindo à **DIO Champions API**! 🚀  
Aqui você pode gerenciar **jogadores** (com atributos como drible, finalização, passe etc.) e consultar os **times da Champions League**.  

---

## 🛠 Tecnologias usadas
- Node.js  
- Express  
- TypeScript  
- TSX / TSUP  

---

## 📦 Scripts disponíveis

No `package.json` você encontra:

- `npm run start:dev` → inicia o servidor em modo desenvolvimento  
- `npm run start:watch` → inicia em **watch mode** (recarrega ao salvar arquivos)  
- `npm run dist` → gera a versão compilada  
- `npm run start:dist` → roda a versão compilada  

---

## 🔗 Rotas principais

### 👤 Jogadores
- `GET /players` → lista todos os jogadores  
- `POST /players` → adiciona um novo jogador  
- `PUT /players/:id` → atualiza jogador por ID  
- `DELETE /players/:id` → remove jogador por ID  

### 🏆 Times da Champions
- `GET /teams` → retorna todos os times participantes da Champions League  

---

## 📌 Exemplo de uso

### Criar um jogador
```json
POST /players
{
  "name": "Ronaldinho",
  "club": "Barcelona",
  "nationality": "Brasileiro",
  "position": "Meia Ofensivo",
  "stats": {
    "drible": 95,
    "finalizacao": 85,
    "marcacao": 40,
    "passe": 92,
    "defesa": 38,
    "overall": 91
  }
}

GET /teams

[
  { "id": 1, "name": "Barcelona" },
  { "id": 2, "name": "Real Madrid" },
  { "id": 3, "name": "Bayern München" }
]

# Instalar dependências
npm install

# Rodar em modo dev
npm run start:dev


