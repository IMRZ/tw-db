import { CollectionCache, CollectionKey } from "../../../common";
import { KvFatigue } from "./KvFatigue";
import { UiUnitStats } from "./UiUnitStats";
export declare namespace UnitFatigueEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _fatigueLevel: string;
        readonly _stat: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly fatigueLevel: KvFatigue.Entry | undefined;
        readonly stat: UiUnitStats.Entry | undefined;
    }
}
export default UnitFatigueEffects;