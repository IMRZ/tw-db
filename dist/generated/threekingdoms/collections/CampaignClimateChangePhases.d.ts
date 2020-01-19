import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignClimateChangePhases {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly campaign: string;
        readonly phase: number;
        readonly roundThreshold: number;
        readonly humanImperiumThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignClimateChangePhases;
