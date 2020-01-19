
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyDealGenerationMostImportantComponentSelectionPriorities {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_most_important_component_selection_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyKey = values["treaty_key"];
      this.priority = values["priority"];
    }
    
    get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyKey);
    }
  }
}

export default CaiDiplomacyDealGenerationMostImportantComponentSelectionPriorities;
