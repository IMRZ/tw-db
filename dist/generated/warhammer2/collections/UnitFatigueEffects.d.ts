import { CollectionCache, CollectionKey } from "../../../common";
import { KvFatigue } from "./KvFatigue";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
export declare namespace UnitFatigueEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _fatigueLevel: string;
        readonly _stat: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get fatigueLevel(): KvFatigue.Entry | undefined;
        get stat(): ModifiableUnitStats.Entry | undefined;
    }
}
export default UnitFatigueEffects;
