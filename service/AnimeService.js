import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname , resolve as pathResolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolve = (relPath) => {
    const fp = pathResolve(__dirname,relPath);
    return fp;
}

class AnimeService {
    constructor() {
        this.animeData = {} 
    }

    async getAllAnime() {
        const animeData = await fs.readFileSync(resolve('./anime_data.json'), 'utf8');
        this.animeData = JSON.parse(animeData);
        return this.animeData;
    }

    async getAnimeById(id) {
        if (!id) {
            return null;
        }
        id = parseInt(id);
        if(!this.animeData.length) {
            await this.getAllAnime();
        }
        return this.animeData.find(anime => anime.anime_id === id);
    }

    addAnime(anime) {
        this.animeData.push(anime);
        fs.writeFileSync(__dirname + './anime_data.json',JSON.stringify(this.animeData), 'utf8');
        return this.animeData;
    }


}

export default new AnimeService();