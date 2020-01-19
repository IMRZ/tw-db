import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
export declare namespace CampaignRegionAdditionalAdjacencyRules {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _firstRegion: string;
        readonly _secondRegion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get firstRegion(): Regions.Entry | undefined;
        get secondRegion(): Regions.Entry | undefined;
    }
}
export default CampaignRegionAdditionalAdjacencyRules;
