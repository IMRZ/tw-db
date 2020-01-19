
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { CampaignStatisticsAffixes } from "./CampaignStatisticsAffixes";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CampaignStatisticsAffixesJunctions {
  export const KEY = new CollectionKey("campaign_statistics_affixes_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _statistic: string;
    readonly _affix: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._statistic = values["statistic"];
      this._affix = values["affix"];
      this._subculture = values["subculture"];
    }
    
    get statistic(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._statistic);
    }
    
    get affix(): CampaignStatisticsAffixes.Entry | undefined {
      const collection = <CampaignStatisticsAffixes.Entry[]>this.collectionCache.getCollection(CampaignStatisticsAffixes.KEY, CampaignStatisticsAffixes.Entry);
      return collection.find(entry => entry.affix === this._affix);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default CampaignStatisticsAffixesJunctions;
