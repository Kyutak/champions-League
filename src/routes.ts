import { Router } from "express";
import * as PlayerController from "./controllers/playes-controlles";
import * as ClubsController from "./controllers/clubs-controller";

const routers = Router();

routers.get('/players',PlayerController.getPLayer)
routers.get('/players/:id',PlayerController.getPLayerById )
routers.post('/players',PlayerController.postPlayer)
routers.delete('/players/:id',PlayerController.deletePlayer)
routers.patch('/players/:id',PlayerController.updatePlayer)

routers.get('/clubs',ClubsController.getClubes)

export default routers;