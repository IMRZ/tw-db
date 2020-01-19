import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace EncyclopediaBuildingRedirects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _redirectBuilding: string;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): BuildingLevels.Entry | undefined;
        get redirectBuilding(): BuildingLevels.Entry | undefined;
    }
}
export default EncyclopediaBuildingRedirects;
