
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadSetParameters } from "./CampaignPayloadSetParameters";

export namespace CampaignPayloadSets {
  export const KEY = new CollectionKey("campaign_payload_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _parameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._parameter = values["parameter"];
    }
    
    get parameter(): CampaignPayloadSetParameters.Entry | undefined {
      const collection = <CampaignPayloadSetParameters.Entry[]>this.collectionCache.getCollection(CampaignPayloadSetParameters.KEY, CampaignPayloadSetParameters.Entry);
      return collection.find(entry => entry.key === this._parameter);
    }
  }
}

export default CampaignPayloadSets;
