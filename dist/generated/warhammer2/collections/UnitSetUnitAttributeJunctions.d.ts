import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace UnitSetUnitAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _unitSet: string;
        readonly _unitAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitSet(): UnitSets.Entry | undefined;
        get unitAttribute(): UnitAttributes.Entry | undefined;
    }
}
export default UnitSetUnitAttributeJunctions;
