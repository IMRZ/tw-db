
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadWeightedSets } from "./CampaignPayloadWeightedSets";

export namespace CampaignPayloadRandomSubPayloads {
  export const KEY = new CollectionKey("campaign_payload_random_sub_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _weightedSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._weightedSet = values["weighted_set"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get weightedSet(): CampaignPayloadWeightedSets.Entry | undefined {
      const collection = <CampaignPayloadWeightedSets.Entry[]>this.collectionCache.getCollection(CampaignPayloadWeightedSets.KEY, CampaignPayloadWeightedSets.Entry);
      return collection.find(entry => entry.key === this._weightedSet);
    }
  }
}

export default CampaignPayloadRandomSubPayloads;
