
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyComponentGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyTreatyComponentGroups;
