import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
export declare namespace CultureToBattleAnimationTables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culturePack: string;
        readonly _battleAnimationsTable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culturePack(): Cultures.Entry | undefined;
        get battleAnimationsTable(): BattleAnimationsTable.Entry | undefined;
    }
}
export default CultureToBattleAnimationTables;
