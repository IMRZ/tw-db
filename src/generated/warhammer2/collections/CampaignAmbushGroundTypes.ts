
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroundTypes } from "./CampaignGroundTypes";

export namespace CampaignAmbushGroundTypes {
  export const KEY = new CollectionKey("campaign_ambush_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly ambushChanceOfSuccess: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.ambushChanceOfSuccess = values["ambush_chance_of_success"];
    }
    
    get key(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._key);
    }
  }
}

export default CampaignAmbushGroundTypes;
