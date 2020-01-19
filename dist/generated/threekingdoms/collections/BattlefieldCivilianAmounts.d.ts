import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlefieldCivilianAmounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly amount: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlefieldCivilianAmounts;
