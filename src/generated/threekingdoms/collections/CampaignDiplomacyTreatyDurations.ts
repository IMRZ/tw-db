
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyDurations {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_durations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly rounds: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.rounds = values["rounds"];
    }
    
  }
}

export default CampaignDiplomacyTreatyDurations;
