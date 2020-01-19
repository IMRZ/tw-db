import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSets } from "./BuildingSets";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingChains } from "./BuildingChains";
export declare namespace BuildingSetToBuildingJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingSet: string;
        readonly _buildingLevel: string;
        readonly _buildingChain: string;
        readonly exclude: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingSet(): BuildingSets.Entry | undefined;
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get buildingChain(): BuildingChains.Entry | undefined;
    }
}
export default BuildingSetToBuildingJunctions;
