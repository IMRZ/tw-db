import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingUiGroups } from "./BuildingUiGroups";
import { BuildingSuperchains } from "./BuildingSuperchains";
export declare namespace BuildingUiGroupsToSuperchains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingUiGroup: string;
        readonly _buildingSuperchain: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingUiGroup(): BuildingUiGroups.Entry | undefined;
        get buildingSuperchain(): BuildingSuperchains.Entry | undefined;
    }
}
export default BuildingUiGroupsToSuperchains;
