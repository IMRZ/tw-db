import { CollectionCache, CollectionKey } from "../../../common";
import { BattleDuelOutcomes } from "./BattleDuelOutcomes";
import { BattleDuelScopes } from "./BattleDuelScopes";
import { BattleDuelStrengthEnums } from "./BattleDuelStrengthEnums";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { BattleDuelTimeEnums } from "./BattleDuelTimeEnums";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";
export declare namespace BattleDuelEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _outcome: string;
        readonly _scope: string;
        readonly _strength: string;
        readonly _stats: string;
        readonly _finishedWithinTime: string;
        readonly value: number;
        readonly _how: string;
        readonly expireTime: number;
        constructor(collectionCache: CollectionCache, values: any);
        get outcome(): BattleDuelOutcomes.Entry | undefined;
        get scope(): BattleDuelScopes.Entry | undefined;
        get strength(): BattleDuelStrengthEnums.Entry | undefined;
        get stats(): ModifiableUnitStats.Entry | undefined;
        get finishedWithinTime(): BattleDuelTimeEnums.Entry | undefined;
        get how(): UnitStatModifiersHowEnums.Entry | undefined;
    }
}
export default BattleDuelEffects;
