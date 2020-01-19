
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadBasicComponentTypes {
  export const KEY = new CollectionKey("campaign_payload_basic_component_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CampaignPayloadBasicComponentTypes;
