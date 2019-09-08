import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Incidents } from "./Incidents";
export declare namespace CharacterSkillLevelToIncidentsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillKey: string;
        readonly level: number;
        readonly _incidentKey: string;
        readonly randomSelection: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterSkillKey: CharacterSkills.Entry | undefined;
        readonly incidentKey: Incidents.Entry | undefined;
    }
}
export default CharacterSkillLevelToIncidentsJunctions;
