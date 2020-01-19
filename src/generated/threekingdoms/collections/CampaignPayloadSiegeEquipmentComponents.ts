
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadSiegeEquipmentComponentTypes } from "./CampaignPayloadSiegeEquipmentComponentTypes";
import { CampaignSiegeConstructionItems } from "./CampaignSiegeConstructionItems";

export namespace CampaignPayloadSiegeEquipmentComponents {
  export const KEY = new CollectionKey("campaign_payload_siege_equipment_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _componentType: string;
    readonly _siegeConstructionItem: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._componentType = values["component_type"];
      this._siegeConstructionItem = values["siege_construction_item"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get componentType(): CampaignPayloadSiegeEquipmentComponentTypes.Entry | undefined {
      const collection = <CampaignPayloadSiegeEquipmentComponentTypes.Entry[]>this.collectionCache.getCollection(CampaignPayloadSiegeEquipmentComponentTypes.KEY, CampaignPayloadSiegeEquipmentComponentTypes.Entry);
      return collection.find(entry => entry.key === this._componentType);
    }
    
    get siegeConstructionItem(): CampaignSiegeConstructionItems.Entry | undefined {
      const collection = <CampaignSiegeConstructionItems.Entry[]>this.collectionCache.getCollection(CampaignSiegeConstructionItems.KEY, CampaignSiegeConstructionItems.Entry);
      return collection.find(entry => entry.key === this._siegeConstructionItem);
    }
  }
}

export default CampaignPayloadSiegeEquipmentComponents;
