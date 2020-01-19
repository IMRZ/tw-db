import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { MainUnits } from "./MainUnits";
import { UnitCastes } from "./UnitCastes";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
export declare namespace UnitSetToUnitJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitSet: string;
        readonly _unitRecord: string;
        readonly _unitCaste: string;
        readonly _unitCategory: string;
        readonly _unitClass: string;
        readonly exclude: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get unitSet(): UnitSets.Entry | undefined;
        get unitRecord(): MainUnits.Entry | undefined;
        get unitCaste(): UnitCastes.Entry | undefined;
        get unitCategory(): UnitCategory.Entry | undefined;
        get unitClass(): UnitClass.Entry | undefined;
    }
}
export default UnitSetToUnitJunctions;
