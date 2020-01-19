
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadSiegeEquipmentComponentTypes {
  export const KEY = new CollectionKey("campaign_payload_siege_equipment_component_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignPayloadSiegeEquipmentComponentTypes;
