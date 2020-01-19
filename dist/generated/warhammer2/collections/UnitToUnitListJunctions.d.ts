import { CollectionCache, CollectionKey } from "../../../common";
import { UnitLists } from "./UnitLists";
import { MainUnits } from "./MainUnits";
export declare namespace UnitToUnitListJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitList: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitList(): UnitLists.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default UnitToUnitListJunctions;
