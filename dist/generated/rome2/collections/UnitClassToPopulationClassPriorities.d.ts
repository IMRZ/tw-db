import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
export declare namespace UnitClassToPopulationClassPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitClass: string;
        readonly upperClassPriority: number;
        readonly middleClassPriority: number;
        readonly lowerClassPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitClass: UnitClass.Entry | undefined;
    }
}
export default UnitClassToPopulationClassPriorities;
