import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
export declare namespace BattleSequences {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battle: string;
        readonly unlockOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battle: Battles.Entry | undefined;
    }
}
export default BattleSequences;
