
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadWeightedSets } from "./CampaignPayloadWeightedSets";
import { CampaignPayloads } from "./CampaignPayloads";

export namespace CampaignPayloadWeightedSetItems {
  export const KEY = new CollectionKey("campaign_payload_weighted_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _weightedSet: string;
    readonly _payload: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._weightedSet = values["weighted_set"];
      this._payload = values["payload"];
      this.weight = values["weight"];
    }
    
    get weightedSet(): CampaignPayloadWeightedSets.Entry | undefined {
      const collection = <CampaignPayloadWeightedSets.Entry[]>this.collectionCache.getCollection(CampaignPayloadWeightedSets.KEY, CampaignPayloadWeightedSets.Entry);
      return collection.find(entry => entry.key === this._weightedSet);
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
  }
}

export default CampaignPayloadWeightedSetItems;
