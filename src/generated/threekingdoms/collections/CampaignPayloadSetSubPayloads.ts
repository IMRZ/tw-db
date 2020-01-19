
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadSets } from "./CampaignPayloadSets";

export namespace CampaignPayloadSetSubPayloads {
  export const KEY = new CollectionKey("campaign_payload_set_sub_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _payloadSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._payloadSet = values["payload_set"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get payloadSet(): CampaignPayloadSets.Entry | undefined {
      const collection = <CampaignPayloadSets.Entry[]>this.collectionCache.getCollection(CampaignPayloadSets.KEY, CampaignPayloadSets.Entry);
      return collection.find(entry => entry.key === this._payloadSet);
    }
  }
}

export default CampaignPayloadSetSubPayloads;
