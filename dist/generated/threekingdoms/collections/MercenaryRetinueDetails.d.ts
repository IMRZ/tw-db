import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueCategories } from "./MercenaryRetinueCategories";
export declare namespace MercenaryRetinueDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly onlyHighestLevelAvailableToRecruit: boolean;
        readonly spawnsAtFullStrength: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): MercenaryRetinueCategories.Entry | undefined;
    }
}
export default MercenaryRetinueDetails;
