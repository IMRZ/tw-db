import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Provinces } from "./Provinces";
export declare namespace RegionToProvinceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _province: string;
        readonly isCapital: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): Regions.Entry | undefined;
        get province(): Provinces.Entry | undefined;
    }
}
export default RegionToProvinceJunctions;
