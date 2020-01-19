import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace UnitsCustomBattleMounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _baseUnit: string;
        readonly _mountedUnit: string;
        readonly iconName: string;
        readonly mountName: string;
        readonly localisedDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        get baseUnit(): MainUnits.Entry | undefined;
        get mountedUnit(): MainUnits.Entry | undefined;
    }
}
export default UnitsCustomBattleMounts;
