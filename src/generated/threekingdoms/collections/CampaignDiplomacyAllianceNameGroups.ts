
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyAllianceNameGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_alliance_name_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
    }
    
  }
}

export default CampaignDiplomacyAllianceNameGroups;
