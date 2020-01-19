import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleResultTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly battleResultType: string;
        readonly resultScreenName: string;
        readonly resultDescription: string;
        readonly unitXpGain: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleResultTypes;
