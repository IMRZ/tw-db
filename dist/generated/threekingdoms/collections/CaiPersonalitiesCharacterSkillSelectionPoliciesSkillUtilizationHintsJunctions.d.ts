import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesCharacterSkillSelectionPolicies } from "./CaiPersonalitiesCharacterSkillSelectionPolicies";
import { CharacterSkillUtilizationHints } from "./CharacterSkillUtilizationHints";
export declare namespace CaiPersonalitiesCharacterSkillSelectionPoliciesSkillUtilizationHintsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _skillSelectionPolicyKey: string;
        readonly _skillUtilizationHintKey: string;
        readonly skillUtilizationMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get skillSelectionPolicyKey(): CaiPersonalitiesCharacterSkillSelectionPolicies.Entry | undefined;
        get skillUtilizationHintKey(): CharacterSkillUtilizationHints.Entry | undefined;
    }
}
export default CaiPersonalitiesCharacterSkillSelectionPoliciesSkillUtilizationHintsJunctions;
