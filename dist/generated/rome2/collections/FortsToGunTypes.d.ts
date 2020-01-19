import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { GunTypes } from "./GunTypes";
export declare namespace FortsToGunTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _gunType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): BuildingLevels.Entry | undefined;
        get gunType(): GunTypes.Entry | undefined;
    }
}
export default FortsToGunTypes;
