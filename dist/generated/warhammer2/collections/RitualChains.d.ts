import { CollectionCache, CollectionKey } from "../../../common";
import { RitualCategories } from "./RitualCategories";
export declare namespace RitualChains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly displayName: string;
        readonly description: string;
        readonly _category: string;
        readonly ritualSitesRequired: number;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: RitualCategories.Entry | undefined;
    }
}
export default RitualChains;
