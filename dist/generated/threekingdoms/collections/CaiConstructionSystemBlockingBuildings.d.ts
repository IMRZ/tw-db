import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemBlockingCategories } from "./CaiConstructionSystemBlockingCategories";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CaiConstructionSystemBlockingBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly _buildingStart: string;
        readonly _buildingEnd: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CaiConstructionSystemBlockingCategories.Entry | undefined;
        get buildingStart(): BuildingLevels.Entry | undefined;
        get buildingEnd(): BuildingLevels.Entry | undefined;
    }
}
export default CaiConstructionSystemBlockingBuildings;
