import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { CaiCharacterSkillSynergyLevels } from "./CaiCharacterSkillSynergyLevels";
export declare namespace CaiCharacterSkillSynergies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _existingCharacterSkillKey: string;
        readonly _potentialCharacterSkillKey: string;
        readonly _synergyLevelKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get existingCharacterSkillKey(): CharacterSkills.Entry | undefined;
        get potentialCharacterSkillKey(): CharacterSkills.Entry | undefined;
        get synergyLevelKey(): CaiCharacterSkillSynergyLevels.Entry | undefined;
    }
}
export default CaiCharacterSkillSynergies;
