import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesConstructionPreferencePolicies } from "./CaiPersonalitiesConstructionPreferencePolicies";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CaiPersonalitiesConstructionPreferencePolicyBuildingJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _policyKey: string;
        readonly _buildingKey: string;
        readonly biasLevel: number;
        readonly absoluteAdjustment: number;
        readonly buildingDiscountLimitAdjustment: number;
        constructor(collectionCache: CollectionCache, values: any);
        get policyKey(): CaiPersonalitiesConstructionPreferencePolicies.Entry | undefined;
        get buildingKey(): BuildingLevels.Entry | undefined;
    }
}
export default CaiPersonalitiesConstructionPreferencePolicyBuildingJunctions;
