
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyAllianceOaths {
  export const KEY = new CollectionKey("campaign_diplomacy_alliance_oaths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyAllianceOaths;
