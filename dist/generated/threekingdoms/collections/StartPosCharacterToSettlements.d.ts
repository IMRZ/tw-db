import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosSettlements } from "./StartPosSettlements";
export declare namespace StartPosCharacterToSettlements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly _settlement: number;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
        get settlement(): StartPosSettlements.Entry | undefined;
    }
}
export default StartPosCharacterToSettlements;
