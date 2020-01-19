
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStatisticsAffixes {
  export const KEY = new CollectionKey("campaign_statistics_affixes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly affix: string;
    readonly localisedDescription: string;
    readonly isSuffix: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.affix = values["affix"];
      this.localisedDescription = values["localised_description"];
      this.isSuffix = !!values["is_suffix"];
    }
    
  }
}

export default CampaignStatisticsAffixes;
