import { PlayerModel } from "../models/player-model";
import { StatisticsPlayerModel } from "../models/statitics-model";
import * as controllers from "../repositories/playes-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async()=>{
    const data = await controllers.findAllPlayers();
    let response = null;

    if(data){
     response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }

    return response
}

export const getPlayerByIdService = async(id:number)=>{
    const data = await controllers.findPlayerById(id);
    let response = null;

    if(data){
     response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }

    return response
}

export const postPlayerService = async(player:PlayerModel)=> {

    let response = null

    if(Object.keys(player).length !== 0){
        response = await controllers.insertPLayer(player)
        return await httpResponse.created();

    }else{
        response = await httpResponse.badRequest( new Error("Bad Request"));
    }

    return response 
}

export const deletePlayerService = async(id:number)=>{
    let response = null;
    await controllers.deletePlayerById(id)
    const isDeleted = await controllers.deletePlayerById(id)

    if(isDeleted){
        response = await httpResponse.ok({message: "Player not found"})
        return response
    }else{
        response = await httpResponse.badRequest(new Error("Bad Request"))
    }

    response = await httpResponse.ok({message: "Player deleted successfully"})

    return response
}

export const updatePlayerService = async(id:number, stats:StatisticsPlayerModel)=>{
   const data = await controllers.findAndModifyPlayer(id, stats)
    let response =null

    if(Object.keys(stats).length === 0){
        const response = await httpResponse.badRequest(new Error("Bad Request"))
    }else{
        response = await httpResponse.ok(data)
    }

   return response
}