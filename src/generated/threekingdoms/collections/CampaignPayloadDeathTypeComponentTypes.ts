
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadDeathTypeComponentTypes {
  export const KEY = new CollectionKey("campaign_payload_death_type_component_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignPayloadDeathTypeComponentTypes;
