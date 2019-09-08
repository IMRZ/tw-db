import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
export declare namespace CaiRitualWeights {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ritual: Rituals.Entry | undefined;
    }
}
export default CaiRitualWeights;
