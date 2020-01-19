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
        get statKey(): UiUnitStats.Entry | undefined;
        get unitClass(): UnitClass.Entry | undefined;
        get filter(): UiUnitStatsFilters.Entry | undefined;
    }
}
export default UiUnitStatToClasses;
