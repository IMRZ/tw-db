import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
export declare namespace SacrificesToSotekRituals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly tier: number;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ritual(): Rituals.Entry | undefined;
    }
}
export default SacrificesToSotekRituals;
