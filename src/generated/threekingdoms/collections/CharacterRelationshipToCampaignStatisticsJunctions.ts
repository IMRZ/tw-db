
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";

export namespace CharacterRelationshipToCampaignStatisticsJunctions {
  export const KEY = new CollectionKey("character_relationship_to_campaign_statistics_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterRelationship: string;
    readonly _campaignStatistic: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterRelationship = values["character_relationship"];
      this._campaignStatistic = values["campaign_statistic"];
    }
    
    get characterRelationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._characterRelationship);
    }
    
    get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._campaignStatistic);
    }
  }
}

export default CharacterRelationshipToCampaignStatisticsJunctions;
