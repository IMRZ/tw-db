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
        readonly province: Provinces.Entry | undefined;
        readonly mercenarySet: MercenaryPools.Entry | undefined;
    }
}
export default ProvinceToMercenarySetJunctions;
