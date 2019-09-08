import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { ArmedCitizenryUnitGroups } from "./ArmedCitizenryUnitGroups";
export declare namespace BuildingLevelArmedCitizenryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _buildingLevel: string;
        readonly _unitGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingLevel: BuildingLevels.Entry | undefined;
        readonly unitGroup: ArmedCitizenryUnitGroups.Entry | undefined;
    }
}
export default BuildingLevelArmedCitizenryJunctions;
