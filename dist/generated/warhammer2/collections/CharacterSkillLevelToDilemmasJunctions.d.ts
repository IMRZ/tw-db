import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Dilemmas } from "./Dilemmas";
export declare namespace CharacterSkillLevelToDilemmasJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillKey: string;
        readonly level: number;
        readonly _dilemmaKey: string;
        readonly randomSelection: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterSkillKey: CharacterSkills.Entry | undefined;
        readonly dilemmaKey: Dilemmas.Entry | undefined;
    }
}
export default CharacterSkillLevelToDilemmasJunctions;
