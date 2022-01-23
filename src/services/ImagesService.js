import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { imageApi } from "./AxiosService"

const apiKey = 'xUJcWH4jyzUJKPcjmWyiZQPkKAM5wQ3TlTrTjF2H'

class ImagesService {

    async getImage(date) {
        const res = await imageApi.get(`apod?api_key=xUJcWH4jyzUJKPcjmWyiZQPkKAM5wQ3TlTrTjF2H`)
        logger.log(res.data)
        AppState.apod = res.data
    }
}

export const imagesService = new ImagesService()