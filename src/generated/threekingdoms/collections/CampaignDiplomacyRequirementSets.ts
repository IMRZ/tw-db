
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyRequirementSets {
  export const KEY = new CollectionKey("campaign_diplomacy_requirement_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyRequirementSets;
