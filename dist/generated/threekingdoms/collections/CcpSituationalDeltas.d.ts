import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CcpSituationalDeltas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unitName: string;
        readonly flankingDelta: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CcpSituationalDeltas;
