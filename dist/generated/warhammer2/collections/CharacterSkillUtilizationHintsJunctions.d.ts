import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { CharacterSkillUtilizationHints } from "./CharacterSkillUtilizationHints";
export declare namespace CharacterSkillUtilizationHintsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _hint: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: CharacterSkills.Entry | undefined;
        readonly hint: CharacterSkillUtilizationHints.Entry | undefined;
    }
}
export default CharacterSkillUtilizationHintsJunctions;
