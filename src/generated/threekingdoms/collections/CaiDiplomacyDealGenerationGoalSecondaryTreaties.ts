
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoals } from "./CaiDiplomacyDealGenerationGoals";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyDealGenerationGoalSecondaryTreaties {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_goal_secondary_treaties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _goalKey: string;
    readonly _treatyKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._goalKey = values["goal_key"];
      this._treatyKey = values["treaty_key"];
      this.priority = values["priority"];
    }
    
    get goalKey(): CaiDiplomacyDealGenerationGoals.Entry | undefined {
      const collection = <CaiDiplomacyDealGenerationGoals.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealGenerationGoals.KEY, CaiDiplomacyDealGenerationGoals.Entry);
      return collection.find(entry => entry._key === this._goalKey);
    }
    
    get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyKey);
    }
  }
}

export default CaiDiplomacyDealGenerationGoalSecondaryTreaties;
