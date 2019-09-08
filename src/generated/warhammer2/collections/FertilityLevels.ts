
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace FertilityLevels {
  export const KEY = new CollectionKey("fertility_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly level: number;
    readonly localisedName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this.level = values["level"];
      this.localisedName = values["localised_name"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default FertilityLevels;
