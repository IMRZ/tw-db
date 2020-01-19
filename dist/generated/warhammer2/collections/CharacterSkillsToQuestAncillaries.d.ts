import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Ancillaries } from "./Ancillaries";
export declare namespace CharacterSkillsToQuestAncillaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _skill: string;
        readonly _ancillary: string;
        readonly useQuestForPrefix: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get skill(): CharacterSkills.Entry | undefined;
        get ancillary(): Ancillaries.Entry | undefined;
    }
}
export default CharacterSkillsToQuestAncillaries;
