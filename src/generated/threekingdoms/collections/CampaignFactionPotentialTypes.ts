
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignFactionPotentialTypes {
  export const KEY = new CollectionKey("campaign_faction_potential_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionPotentialType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionPotentialType = values["faction_potential_type"];
    }
    
  }
}

export default CampaignFactionPotentialTypes;
