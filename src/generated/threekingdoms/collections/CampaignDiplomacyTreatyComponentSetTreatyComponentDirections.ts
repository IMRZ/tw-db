
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyComponentSetTreatyComponentDirections {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_set_treaty_component_directions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly direction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.direction = values["direction"];
    }
    
  }
}

export default CampaignDiplomacyTreatyComponentSetTreatyComponentDirections;
