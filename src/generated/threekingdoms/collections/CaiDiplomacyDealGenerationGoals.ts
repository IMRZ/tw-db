
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoalNames } from "./CaiDiplomacyDealGenerationGoalNames";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyDealGenerationGoals {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_goals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _treatyKey: string;
    readonly isCrucial: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._treatyKey = values["treaty_key"];
      this.isCrucial = !!values["is_crucial"];
    }
    
    get key(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined {
      const collection = <CaiDiplomacyDealGenerationGoalNames.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealGenerationGoalNames.KEY, CaiDiplomacyDealGenerationGoalNames.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyKey);
    }
  }
}

export default CaiDiplomacyDealGenerationGoals;
