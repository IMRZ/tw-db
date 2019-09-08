import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
export declare namespace RitualIncursionStrengths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly difficulty: number;
        readonly strength: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ritual: Rituals.Entry | undefined;
    }
}
export default RitualIncursionStrengths;
