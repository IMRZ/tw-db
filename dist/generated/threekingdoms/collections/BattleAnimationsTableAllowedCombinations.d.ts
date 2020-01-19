import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
export declare namespace BattleAnimationsTableAllowedCombinations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _baseAnimation: string;
        readonly _additionalAnimation: string;
        readonly _secondaryWeaponAnimation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get baseAnimation(): BattleAnimationsTable.Entry | undefined;
        get additionalAnimation(): BattleAnimationsTable.Entry | undefined;
        get secondaryWeaponAnimation(): BattleAnimationsTable.Entry | undefined;
    }
}
export default BattleAnimationsTableAllowedCombinations;
