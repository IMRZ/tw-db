import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace AutoresolverUnitRecordUsageFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mainUnitRecord: string;
        readonly alwaysDestroyIfEngagedInMelee: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mainUnitRecord: MainUnits.Entry | undefined;
    }
}
export default AutoresolverUnitRecordUsageFlags;
