import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { GroupingsMilitary } from "./GroupingsMilitary";
export declare namespace UnitsToGroupingsMilitaryPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _militaryGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly militaryGroup: GroupingsMilitary.Entry | undefined;
    }
}
export default UnitsToGroupingsMilitaryPermissions;
