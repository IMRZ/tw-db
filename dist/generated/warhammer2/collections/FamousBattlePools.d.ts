import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace FamousBattlePools {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly poolId: number;
        readonly poolPosX: number;
        readonly poolPosY: number;
        readonly poolRadius: number;
        readonly battleName: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default FamousBattlePools;
