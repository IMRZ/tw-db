import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CaiBaseBuildingContextValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingKey: string;
        readonly economicValue: number;
        readonly militaryValue: number;
        readonly happinessValue: number;
        readonly prestigeValue: number;
        readonly educationValue: number;
        readonly existingBuildingsApplyDiscountOverLimit: number;
        readonly existingBuildingsDiscountPerBuilding: number;
        readonly existingBuildingsMaximumDiscount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingKey: BuildingLevels.Entry | undefined;
    }
}
export default CaiBaseBuildingContextValues;
