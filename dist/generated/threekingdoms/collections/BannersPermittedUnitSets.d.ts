import { CollectionCache, CollectionKey } from "../../../common";
import { Banners } from "./Banners";
import { UnitSets } from "./UnitSets";
export declare namespace BannersPermittedUnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _banner: string;
        readonly _unitSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get banner(): Banners.Entry | undefined;
        get unitSet(): UnitSets.Entry | undefined;
    }
}
export default BannersPermittedUnitSets;
