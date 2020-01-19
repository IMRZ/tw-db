import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Cultures } from "./Cultures";
import { MainUnits } from "./MainUnits";
import { MovieEventStrings } from "./MovieEventStrings";
import { Genders } from "./Genders";
export declare namespace AgentCultureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _agent: string;
        readonly _culture: string;
        readonly onscreenName: string;
        readonly _associatedUnit: string;
        readonly descriptionText: string;
        readonly season: string;
        readonly level: number;
        readonly equipmentTheme: string;
        readonly _agentRecruitedMovie: string;
        readonly _gender: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agent(): Agents.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get associatedUnit(): MainUnits.Entry | undefined;
        get agentRecruitedMovie(): MovieEventStrings.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default AgentCultureDetails;
