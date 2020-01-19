import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly onscreen: string;
        readonly sortOrder: number;
        readonly defenderFundsRatio: number;
        readonly maxTeamsize: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleTypes;
