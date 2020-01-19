
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyComponentRemovalTypes {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_removal_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CampaignDiplomacyTreatyComponentRemovalTypes;
