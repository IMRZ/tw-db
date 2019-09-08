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
        readonly banner: Banners.Entry | undefined;
        readonly unitSet: UnitSets.Entry | undefined;
    }
}
export default BannersPermittedUnitSets;
