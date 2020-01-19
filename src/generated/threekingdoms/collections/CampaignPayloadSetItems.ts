
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadSets } from "./CampaignPayloadSets";
import { CampaignPayloads } from "./CampaignPayloads";

export namespace CampaignPayloadSetItems {
  export const KEY = new CollectionKey("campaign_payload_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payloadSet: string;
    readonly minValue: number;
    readonly maxValue: number;
    readonly _payload: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payloadSet = values["payload_set"];
      this.minValue = values["min_value"];
      this.maxValue = values["max_value"];
      this._payload = values["payload"];
    }
    
    get payloadSet(): CampaignPayloadSets.Entry | undefined {
      const collection = <CampaignPayloadSets.Entry[]>this.collectionCache.getCollection(CampaignPayloadSets.KEY, CampaignPayloadSets.Entry);
      return collection.find(entry => entry.key === this._payloadSet);
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
  }
}

export default CampaignPayloadSetItems;
