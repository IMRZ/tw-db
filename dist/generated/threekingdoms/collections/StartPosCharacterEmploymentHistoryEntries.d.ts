import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosCharacterEmploymentHistoryEntries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly _faction: number;
        readonly turnsBeforeStartJoined: number;
        readonly turnsBeforeStartDeparted: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
        get faction(): StartPosFactions.Entry | undefined;
    }
}
export default StartPosCharacterEmploymentHistoryEntries;
