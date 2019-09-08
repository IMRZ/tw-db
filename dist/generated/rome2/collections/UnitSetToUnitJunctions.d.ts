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
        readonly unitSet: UnitSets.Entry | undefined;
        readonly unitRecord: MainUnits.Entry | undefined;
        readonly unitCaste: UnitCastes.Entry | undefined;
        readonly unitCategory: UnitCategory.Entry | undefined;
        readonly unitClass: UnitClass.Entry | undefined;
    }
}
export default UnitSetToUnitJunctions;
