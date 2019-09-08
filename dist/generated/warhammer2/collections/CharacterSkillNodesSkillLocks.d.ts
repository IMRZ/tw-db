import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace CharacterSkillNodesSkillLocks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillNode: string;
        readonly _characterSkill: string;
        readonly level: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterSkillNode: CharacterSkillNodes.Entry | undefined;
        readonly characterSkill: CharacterSkills.Entry | undefined;
    }
}
export default CharacterSkillNodesSkillLocks;
