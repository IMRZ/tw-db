import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
export declare namespace CampaignStormsExcludedRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
    }
}
export default CampaignStormsExcludedRegions;
