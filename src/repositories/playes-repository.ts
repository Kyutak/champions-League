import { PlayerModel } from "../models/player-model"
import { StatisticsPlayerModel } from "../models/statitics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Ronaldinho",
    club: "Barcelona",
    nationality: "Brasileiro",
    position: "Meia Ofensivo",
    stats: {
      drible: 95,
      finalizacao: 85,
      marcacao: 40,
      passe: 92,
      defesa: 38,
      overall: 91,
    },
  },
  {
    id: 2,
    name: "Messi",
    club: "Inter Miami",
    nationality: "Argentino",
    position: "Atacante",
    stats: {
      drible: 96,
      finalizacao: 94,
      marcacao: 35,
      passe: 91,
      defesa: 30,
      overall: 94,
    },
  },
  {
    id: 3,
    name: "Kaká",
    club: "Milan",
    nationality: "Brasileiro",
    position: "Meia Ofensivo",
    stats: {
      drible: 88,
      finalizacao: 86,
      marcacao: 50,
      passe: 85,
      defesa: 48,
      overall: 87,
    },
  },
  {
    id: 4,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Português",
    position: "Atacante",
    stats: {
      drible: 88,
      finalizacao: 95,
      marcacao: 40,
      passe: 82,
      defesa: 38,
      overall: 92,
    },
  },
  {
    id: 5,
    name: "Neymar Jr",
    club: "Al-Hilal",
    nationality: "Brasileiro",
    position: "Atacante",
    stats: {
      drible: 95,
      finalizacao: 87,
      marcacao: 40,
      passe: 86,
      defesa: 35,
      overall: 90,
    },
  },
  {
    id: 6,
    name: "Mbappé",
    club: "PSG",
    nationality: "Francês",
    position: "Atacante",
    stats: {
      drible: 92,
      finalizacao: 93,
      marcacao: 42,
      passe: 84,
      defesa: 40,
      overall: 92,
    },
  },
  {
    id: 7,
    name: "Pelé",
    club: "Santos",
    nationality: "Brasileiro",
    position: "Atacante",
    stats: {
      drible: 94,
      finalizacao: 96,
      marcacao: 55,
      passe: 88,
      defesa: 50,
      overall: 95,
    },
  },
  {
    id: 8,
    name: "Maradona",
    club: "Napoli",
    nationality: "Argentino",
    position: "Meia Ofensivo",
    stats: {
      drible: 96,
      finalizacao: 92,
      marcacao: 48,
      passe: 93,
      defesa: 42,
      overall: 94,
    },
  },
  {
    id: 9,
    name: "Zidane",
    club: "Real Madrid",
    nationality: "Francês",
    position: "Meia Central",
    stats: {
      drible: 90,
      finalizacao: 85,
      marcacao: 60,
      passe: 94,
      defesa: 58,
      overall: 91,
    },
  },
  {
    id: 10,
    name: "Xavi",
    club: "Barcelona",
    nationality: "Espanhol",
    position: "Meia Central",
    stats: {
      drible: 88,
      finalizacao: 78,
      marcacao: 65,
      passe: 95,
      defesa: 62,
      overall: 90,
    },
  },
  {
    id: 11,
    name: "Iniesta",
    club: "Barcelona",
    nationality: "Espanhol",
    position: "Meia Ofensivo",
    stats: {
      drible: 91,
      finalizacao: 80,
      marcacao: 60,
      passe: 94,
      defesa: 58,
      overall: 90,
    },
  },
  {
    id: 12,
    name: "Modric",
    club: "Real Madrid",
    nationality: "Croata",
    position: "Meia Central",
    stats: {
      drible: 89,
      finalizacao: 81,
      marcacao: 68,
      passe: 93,
      defesa: 65,
      overall: 90,
    },
  },
  {
    id: 13,
    name: "Sergio Ramos",
    club: "Sevilla",
    nationality: "Espanhol",
    position: "Zagueiro",
    stats: {
      drible: 70,
      finalizacao: 65,
      marcacao: 94,
      passe: 80,
      defesa: 95,
      overall: 90,
    },
  },
  {
    id: 14,
    name: "Cafu",
    club: "Milan",
    nationality: "Brasileiro",
    position: "Lateral Direito",
    stats: {
      drible: 85,
      finalizacao: 70,
      marcacao: 88,
      passe: 84,
      defesa: 89,
      overall: 88,
    },
  },
];

export const findAllPlayers = async(): Promise<PlayerModel[]>=>{
    return database
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined>=>{
    return database.find(player => player.id === id)
}

export const createPlayer = async(player: PlayerModel) =>{
    database.push(player)
}

export const insertPLayer = async(player: PlayerModel) =>{
    database.push(player)
}

export const deletePlayerById = async(id: number) =>{
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyPlayer = async(id: number, stats:StatisticsPlayerModel) =>{
    const player = database.findIndex(player => player.id === id);
    if(player === -1){
        database[player].stats = stats;
    }else{
        throw new Error("Player not found");
    }

    return database[player];
}