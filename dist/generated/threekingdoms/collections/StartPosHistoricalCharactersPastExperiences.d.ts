import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { Factions } from "./Factions";
import { PastExperienceReasons } from "./PastExperienceReasons";
export declare namespace StartPosHistoricalCharactersPastExperiences {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly _targetFaction: string;
        readonly _memory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
        get targetFaction(): Factions.Entry | undefined;
        get memory(): PastExperienceReasons.Entry | undefined;
    }
}
export default StartPosHistoricalCharactersPastExperiences;
