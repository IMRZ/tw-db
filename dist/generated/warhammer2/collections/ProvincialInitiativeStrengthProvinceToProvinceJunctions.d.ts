import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
export declare namespace ProvincialInitiativeStrengthProvinceToProvinceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _province1: string;
        readonly _province2: string;
        constructor(collectionCache: CollectionCache, values: any);
        get province1(): Provinces.Entry | undefined;
        get province2(): Provinces.Entry | undefined;
    }
}
export default ProvincialInitiativeStrengthProvinceToProvinceJunctions;
