import * as HttpResponse from "../utils/http-helper"
import * as controllers from "../repositories/clubs-repositores"

export const getClubServices = async () => {
    const data = await controllers.findAllClubs();
    const response = await HttpResponse.ok(data);
    return response
}