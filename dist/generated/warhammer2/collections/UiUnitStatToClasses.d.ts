import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitClass } from "./UnitClass";
import { UiUnitStatsFilters } from "./UiUnitStatsFilters";
export declare namespace UiUnitStatToClasses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _statKey: string;
        readonly _unitClass: string;
        readonly listOrder: number;
        readonly _filter: string;
        readonly baseValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly statKey: UiUnitStats.Entry | undefined;
        readonly unitClass: UnitClass.Entry | undefined;
        readonly filter: UiUnitStatsFilters.Entry | undefined;
    }
}
export default UiUnitStatToClasses;
