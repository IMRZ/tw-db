import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
import { VictoryConditions } from "./VictoryConditions";
export declare namespace BattleTypesToVictoryConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleType: string;
        readonly _attackerVictoryCondition: string;
        readonly _defenderVictoryCondition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleType(): BattleTypes.Entry | undefined;
        get attackerVictoryCondition(): VictoryConditions.Entry | undefined;
        get defenderVictoryCondition(): VictoryConditions.Entry | undefined;
    }
}
export default BattleTypesToVictoryConditions;
