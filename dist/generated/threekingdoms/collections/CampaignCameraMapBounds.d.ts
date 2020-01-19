import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignCameraMapBounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly minX: number;
        readonly minY: number;
        readonly maxX: number;
        readonly maxY: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default CampaignCameraMapBounds;
