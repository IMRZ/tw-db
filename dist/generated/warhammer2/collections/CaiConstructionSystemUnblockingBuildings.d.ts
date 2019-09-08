import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemBlockingCategories } from "./CaiConstructionSystemBlockingCategories";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CaiConstructionSystemUnblockingBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly _buildingStart: string;
        readonly _buildingEnd: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: CaiConstructionSystemBlockingCategories.Entry | undefined;
        readonly buildingStart: BuildingLevels.Entry | undefined;
        readonly buildingEnd: BuildingLevels.Entry | undefined;
    }
}
export default CaiConstructionSystemUnblockingBuildings;
