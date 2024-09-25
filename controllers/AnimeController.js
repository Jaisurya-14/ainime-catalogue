import AnimeService from "../service/AnimeService.js";
import JsonView from "../view/JsonView.js";

class AnimeController {

    async getAllAnime(req, res) {
        const animeData = await AnimeService.getAllAnime();
        if(!animeData){
            JsonView.renderError(res,500,{message: 'Internal Server Error'});
        }
        JsonView.renderJson(res,200,animeData);
    }

    async getAnimeById(req, res) {
        const id = req.params.anime_id;
        const animeData = await AnimeService.getAnimeById(id);
        if(!animeData){
          return  JsonView.renderError(res,404,{message: 'Anime not found'});
        }
        return JsonView.renderJson(res,200,animeData);
    }

    async addAnime(req, res) {
        const anime = req.body;
        if(!anime) {
            JsonView.renderError(res,400,{ message : 'Bad request'})
        }
        const animeData = await AnimeService.addAnime(anime);
        JsonView.renderJson(res,201,animeData)
    }
}

export default new AnimeController();