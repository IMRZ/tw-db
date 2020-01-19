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
        constructor(collectionCache: CollectionCache, values: any);
        get characterSkillKey(): CharacterSkills.Entry | undefined;
        get dilemmaKey(): Dilemmas.Entry | undefined;
    }
}
export default CharacterSkillLevelToDilemmasJunctions;
