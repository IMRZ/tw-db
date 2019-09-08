import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FamousBattlePools {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly poolId: number;
        readonly poolPosX: number;
        readonly poolPosY: number;
        readonly poolRadius: number;
        readonly battleName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FamousBattlePools;
