import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MpForceGenCompositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly generalPct: number;
        readonly unitsPct: number;
        readonly upgradePct: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MpForceGenCompositions;
