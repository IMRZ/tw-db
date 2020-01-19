import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Missions } from "./Missions";
export declare namespace CharacterSkillLevelToMissionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillKey: string;
        readonly level: number;
        readonly _missionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterSkillKey(): CharacterSkills.Entry | undefined;
        get missionKey(): Missions.Entry | undefined;
    }
}
export default CharacterSkillLevelToMissionsJunctions;
