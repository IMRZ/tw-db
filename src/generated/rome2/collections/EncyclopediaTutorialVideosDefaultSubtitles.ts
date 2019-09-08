
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialVideos } from "./EncyclopediaTutorialVideos";
import { Languages } from "./Languages";

export namespace EncyclopediaTutorialVideosDefaultSubtitles {
  export const KEY = new CollectionKey("encyclopedia_tutorial_videos_default_subtitles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _video: string;
    readonly _language: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._video = values["video"];
      this._language = values["language"];
    }
    
    get video(): EncyclopediaTutorialVideos.Entry | undefined {
      const collection = <EncyclopediaTutorialVideos.Entry[]>this.collectionCache.getCollection(EncyclopediaTutorialVideos.KEY, EncyclopediaTutorialVideos.Entry);
      return collection.find(entry => entry.key === this._video);
    }
    
    get language(): Languages.Entry | undefined {
      const collection = <Languages.Entry[]>this.collectionCache.getCollection(Languages.KEY, Languages.Entry);
      return collection.find(entry => entry.key === this._language);
    }
  }
}

export default EncyclopediaTutorialVideosDefaultSubtitles;
