import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Pdlc {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly steamId: number;
        readonly description: string;
        readonly releaseOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Pdlc;
