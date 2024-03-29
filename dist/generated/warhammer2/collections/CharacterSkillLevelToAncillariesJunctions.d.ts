import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Ancillaries } from "./Ancillaries";
export declare namespace CharacterSkillLevelToAncillariesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _skill: string;
        readonly _grantedAncillary: string;
        readonly level: number;
        constructor(collectionCache: CollectionCache, values: any);
        get skill(): CharacterSkills.Entry | undefined;
        get grantedAncillary(): Ancillaries.Entry | undefined;
    }
}
export default CharacterSkillLevelToAncillariesJunctions;
