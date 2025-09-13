import { ClubsModel } from "../models/Clubs-model"
import fs from "fs/promises"

const database: ClubsModel[] = [
    {id: 1, name: "Real Madrid"},
    {id: 2, name: "Barcelona"},
]

export const findAllClubs = async(): Promise<ClubsModel[]>=>{
    const data = await fs.readFile("./src/data/clubs.json", {encoding: "utf-8"})
    const clubs: ClubsModel[] = JSON.parse(data)

    return clubs
}
