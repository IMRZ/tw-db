import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualChains } from "./RitualChains";
export declare namespace RitualsToRitualChains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly _chain: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ritual(): Rituals.Entry | undefined;
        get chain(): RitualChains.Entry | undefined;
    }
}
export default RitualsToRitualChains;
