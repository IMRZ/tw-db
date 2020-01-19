
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadBasicValueComponentTypes } from "./CampaignPayloadBasicValueComponentTypes";

export namespace CampaignPayloadBasicValueComponents {
  export const KEY = new CollectionKey("campaign_payload_basic_value_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _componentType: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._componentType = values["component_type"];
      this.value = values["value"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get componentType(): CampaignPayloadBasicValueComponentTypes.Entry | undefined {
      const collection = <CampaignPayloadBasicValueComponentTypes.Entry[]>this.collectionCache.getCollection(CampaignPayloadBasicValueComponentTypes.KEY, CampaignPayloadBasicValueComponentTypes.Entry);
      return collection.find(entry => entry.type === this._componentType);
    }
  }
}

export default CampaignPayloadBasicValueComponents;
