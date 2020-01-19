
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyRequirementOptions {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirement_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyTreatyRequirementOptions;
