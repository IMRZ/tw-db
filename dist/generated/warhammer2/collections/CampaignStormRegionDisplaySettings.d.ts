import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignStormRegionDisplaySettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly region: string;
        readonly tilingVfxDistance: number;
        readonly tilingVfxRandomJitter: number;
        readonly levelVfxDistance: number;
        readonly levelVfxRandomJitter: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignStormRegionDisplaySettings;
