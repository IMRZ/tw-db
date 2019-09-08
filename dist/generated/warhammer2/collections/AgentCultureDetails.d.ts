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
        readonly _agentRecruitedMovie: string;
        readonly _gender: string;
        readonly icon: string;
        readonly smallIcon: string;
        readonly recruitableInUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agent: Agents.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly associatedUnit: MainUnits.Entry | undefined;
        readonly agentRecruitedMovie: MovieEventStrings.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default AgentCultureDetails;
