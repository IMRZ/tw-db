import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace BuildingDowngradeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _from: string;
        readonly _to: string;
        constructor(collectionCache: CollectionCache, values: any);
        get from(): BuildingLevels.Entry | undefined;
        get to(): BuildingLevels.Entry | undefined;
    }
}
export default BuildingDowngradeJunctions;
