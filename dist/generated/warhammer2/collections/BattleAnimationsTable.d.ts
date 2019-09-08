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
        readonly skeleton: BattleSkeletons.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default BattleAnimationsTable;
