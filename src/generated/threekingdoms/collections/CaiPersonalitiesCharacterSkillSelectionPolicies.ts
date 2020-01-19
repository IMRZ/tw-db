
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesCharacterSkillSelectionPolicies {
  export const KEY = new CollectionKey("cai_personalities_character_skill_selection_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly priorityChainSelectionWeightMean: number;
    readonly priorityChainSelectionWeightStandardDeviation: number;
    readonly priorityChainSelectionWeightMinimum: number;
    readonly priorityChainSelectionWeightMaximum: number;
    readonly existingSkillSelectionWeightMean: number;
    readonly existingSkillSelectionWeightStandardDeviation: number;
    readonly existingSkillSelectionWeightMinimum: number;
    readonly existingSkillSelectionWeightMaximum: number;
    readonly skillUtilizationDefaultMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.priorityChainSelectionWeightMean = values["priority_chain_selection_weight_mean"];
      this.priorityChainSelectionWeightStandardDeviation = values["priority_chain_selection_weight_standard_deviation"];
      this.priorityChainSelectionWeightMinimum = values["priority_chain_selection_weight_minimum"];
      this.priorityChainSelectionWeightMaximum = values["priority_chain_selection_weight_maximum"];
      this.existingSkillSelectionWeightMean = values["existing_skill_selection_weight_mean"];
      this.existingSkillSelectionWeightStandardDeviation = values["existing_skill_selection_weight_standard_deviation"];
      this.existingSkillSelectionWeightMinimum = values["existing_skill_selection_weight_minimum"];
      this.existingSkillSelectionWeightMaximum = values["existing_skill_selection_weight_maximum"];
      this.skillUtilizationDefaultMultiplier = values["skill_utilization_default_multiplier"];
    }
    
  }
}

export default CaiPersonalitiesCharacterSkillSelectionPolicies;
