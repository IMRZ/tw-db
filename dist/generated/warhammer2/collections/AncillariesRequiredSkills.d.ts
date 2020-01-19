import { CollectionCache, CollectionKey } from "../../../common";
import { Ancillaries } from "./Ancillaries";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace AncillariesRequiredSkills {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _requiredSkill: string;
        readonly requiredSkillLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ancillary(): Ancillaries.Entry | undefined;
        get requiredSkill(): CharacterSkills.Entry | undefined;
    }
}
export default AncillariesRequiredSkills;
