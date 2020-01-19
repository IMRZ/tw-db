import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
import { MercenaryPools } from "./MercenaryPools";
export declare namespace ProvinceToMercenarySetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _province: string;
        readonly _mercenarySet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get province(): Provinces.Entry | undefined;
        get mercenarySet(): MercenaryPools.Entry | undefined;
    }
}
export default ProvinceToMercenarySetJunctions;
