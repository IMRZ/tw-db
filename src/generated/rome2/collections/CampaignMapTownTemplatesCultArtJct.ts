
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace CampaignMapTownTemplatesCultArtJct {
  export const KEY = new CollectionKey("campaign_map_town_templates_cult_art_jct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly artpiece: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this.artpiece = values["artpiece"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignMapTownTemplatesCultArtJct;
