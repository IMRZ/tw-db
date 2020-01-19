
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyComponentSets {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly set: string;
    readonly mustMatchSelf: boolean;
    readonly mustMatchAFactionWithNoComponents: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.set = values["set"];
      this.mustMatchSelf = !!values["must_match_self"];
      this.mustMatchAFactionWithNoComponents = !!values["must_match_a_faction_with_no_components"];
    }
    
  }
}

export default CampaignDiplomacyTreatyComponentSets;
