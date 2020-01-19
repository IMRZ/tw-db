
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignCharacterPoolGroupIds } from "./CampaignCharacterPoolGroupIds";

export namespace CampaignCharacterPoolGroups {
  export const KEY = new CollectionKey("campaign_character_pool_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _characterPoolGroup: string;
    readonly enableRecruitment: boolean;
    readonly minCharacters: number;
    readonly medianCharacters: number;
    readonly maxCharacters: number;
    readonly targetCharacters: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._characterPoolGroup = values["character_pool_group"];
      this.enableRecruitment = !!values["enable_recruitment"];
      this.minCharacters = values["min_characters"];
      this.medianCharacters = values["median_characters"];
      this.maxCharacters = values["max_characters"];
      this.targetCharacters = values["target_characters"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get characterPoolGroup(): CampaignCharacterPoolGroupIds.Entry | undefined {
      const collection = <CampaignCharacterPoolGroupIds.Entry[]>this.collectionCache.getCollection(CampaignCharacterPoolGroupIds.KEY, CampaignCharacterPoolGroupIds.Entry);
      return collection.find(entry => entry.id === this._characterPoolGroup);
    }
  }
}

export default CampaignCharacterPoolGroups;
