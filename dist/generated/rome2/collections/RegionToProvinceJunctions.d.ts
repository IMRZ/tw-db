import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Provinces } from "./Provinces";
export declare namespace RegionToProvinceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _province: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly province: Provinces.Entry | undefined;
    }
}
export default RegionToProvinceJunctions;
