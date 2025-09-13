export interface PlayerModel {
    id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  stats: {
    drible: number;
    finalizacao: number;
    marcacao: number;
    passe: number;
    defesa: number;
    overall: number;
  };
}

export interface HttpResponse  {
    statusCode: number;
    body: any;
}