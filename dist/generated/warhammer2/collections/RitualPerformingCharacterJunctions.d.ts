import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualPerformingCharacters } from "./RitualPerformingCharacters";
export declare namespace RitualPerformingCharacterJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly _character: string;
        readonly amount: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ritual(): Rituals.Entry | undefined;
        get character(): RitualPerformingCharacters.Entry | undefined;
    }
}
export default RitualPerformingCharacterJunctions;
