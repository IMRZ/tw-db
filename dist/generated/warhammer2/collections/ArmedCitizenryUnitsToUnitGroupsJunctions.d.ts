import { CollectionCache, CollectionKey } from "../../../common";
import { ArmedCitizenryUnitGroups } from "./ArmedCitizenryUnitGroups";
import { MainUnits } from "./MainUnits";
export declare namespace ArmedCitizenryUnitsToUnitGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _unitGroup: string;
        readonly _unit: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get unitGroup(): ArmedCitizenryUnitGroups.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default ArmedCitizenryUnitsToUnitGroupsJunctions;
