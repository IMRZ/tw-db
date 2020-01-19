
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadBasicComponentTypes } from "./CampaignPayloadBasicComponentTypes";

export namespace CampaignPayloadBasicComponents {
  export const KEY = new CollectionKey("campaign_payload_basic_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _componentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._componentType = values["component_type"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get componentType(): CampaignPayloadBasicComponentTypes.Entry | undefined {
      const collection = <CampaignPayloadBasicComponentTypes.Entry[]>this.collectionCache.getCollection(CampaignPayloadBasicComponentTypes.KEY, CampaignPayloadBasicComponentTypes.Entry);
      return collection.find(entry => entry.type === this._componentType);
    }
  }
}

export default CampaignPayloadBasicComponents;
