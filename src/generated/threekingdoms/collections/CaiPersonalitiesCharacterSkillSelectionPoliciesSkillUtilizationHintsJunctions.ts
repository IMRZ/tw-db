
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesCharacterSkillSelectionPolicies } from "./CaiPersonalitiesCharacterSkillSelectionPolicies";
import { CharacterSkillUtilizationHints } from "./CharacterSkillUtilizationHints";

export namespace CaiPersonalitiesCharacterSkillSelectionPoliciesSkillUtilizationHintsJunctions {
  export const KEY = new CollectionKey("cai_personalities_character_skill_selection_policies_skill_utilization_hints_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _skillSelectionPolicyKey: string;
    readonly _skillUtilizationHintKey: string;
    readonly skillUtilizationMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._skillSelectionPolicyKey = values["skill_selection_policy_key"];
      this._skillUtilizationHintKey = values["skill_utilization_hint_key"];
      this.skillUtilizationMultiplier = values["skill_utilization_multiplier"];
    }
    
    get skillSelectionPolicyKey(): CaiPersonalitiesCharacterSkillSelectionPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesCharacterSkillSelectionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesCharacterSkillSelectionPolicies.KEY, CaiPersonalitiesCharacterSkillSelectionPolicies.Entry);
      return collection.find(entry => entry.key === this._skillSelectionPolicyKey);
    }
    
    get skillUtilizationHintKey(): CharacterSkillUtilizationHints.Entry | undefined {
      const collection = <CharacterSkillUtilizationHints.Entry[]>this.collectionCache.getCollection(CharacterSkillUtilizationHints.KEY, CharacterSkillUtilizationHints.Entry);
      return collection.find(entry => entry.key === this._skillUtilizationHintKey);
    }
  }
}

export default CaiPersonalitiesCharacterSkillSelectionPoliciesSkillUtilizationHintsJunctions;
