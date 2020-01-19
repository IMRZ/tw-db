import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSkeletons } from "./BattleSkeletons";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace BattleAnimationsTable {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _skeleton: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get skeleton(): BattleSkeletons.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default BattleAnimationsTable;
