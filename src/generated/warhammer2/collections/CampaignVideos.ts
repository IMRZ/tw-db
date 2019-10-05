
import { CollectionCache, CollectionKey } from "../../../common";
import { Videos } from "./Videos";
import { Cultures } from "./Cultures";
import { Pdlc } from "./Pdlc";

export namespace CampaignVideos {
  export const KEY = new CollectionKey("campaign_videos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _videoName: string;
    readonly localisedTitle: string;
    readonly _culture: string;
    readonly campaignLocked: boolean;
    readonly stillPath: string;
    readonly sort: number;
    readonly _pdlc: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._videoName = values["video_name"];
      this.localisedTitle = values["localised_title"];
      this._culture = values["culture"];
      this.campaignLocked = !!values["campaign_locked"];
      this.stillPath = values["still_path"];
      this.sort = values["sort"];
      this._pdlc = values["pdlc"];
    }
    
    get videoName(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._videoName);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get pdlc(): Pdlc.Entry | undefined {
      const collection = <Pdlc.Entry[]>this.collectionCache.getCollection(Pdlc.KEY, Pdlc.Entry);
      return collection.find(entry => entry.id === this._pdlc);
    }
  }
}

export default CampaignVideos;
