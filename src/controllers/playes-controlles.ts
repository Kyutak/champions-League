import { Request, Response } from "express";
import * as services from "../services/plyers-services";
import { noContent } from "../utils/http-helper";
import { StatisticsPlayerModel } from "../models/statitics-model";

export const getPLayer = async(req:Request, res:Response)=>{
    const httpResponse = await services.getPlayerService()


    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getPLayerById = async(req:Request, res:Response)=>{
    const id = req.params.id
    const httpResponse = await services.getPlayerByIdService(Number(id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async(req:Request, res:Response)=>{
    const bodyValue = req.body
    const httpResponse = await services.postPlayerService(bodyValue)

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
}

export const deletePlayer = async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await services.deletePlayerService(id)

}

export const updatePlayer = async(req:Request, res:Response)=>{
   const response = await services.updatePlayerService
}