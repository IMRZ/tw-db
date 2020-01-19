import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
export declare namespace StartPosCharacterRetinueUnitModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly retinueSlotIndex: number;
        readonly unitStartingHealthPercentage: number;
        readonly unitStartingExperienceLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
    }
}
export default StartPosCharacterRetinueUnitModifiers;
