
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyRequirementSources {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirement_sources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly source: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.source = values["source"];
    }
    
  }
}

export default CampaignDiplomacyTreatyRequirementSources;
