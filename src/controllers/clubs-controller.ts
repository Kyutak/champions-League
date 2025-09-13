import { Request, Response } from "express";
import { getClubServices } from "../services/clubs-services";
import * as HttpResponse from "../utils/http-helper"

export const getClubes = async(req:Request, res:Response)=>{
    const response = await getClubServices()
    res.status(response.statusCode).json(response.body)
}