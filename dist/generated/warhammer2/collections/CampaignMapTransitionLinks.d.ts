import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapTransitionAreas } from "./CampaignMapTransitionAreas";
export declare namespace CampaignMapTransitionLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly index: number;
        readonly _startArea: number;
        readonly _endArea: number;
        readonly delayChancePercentage: number;
        readonly turnsStartToEnd: number;
        readonly turnsEndToStart: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly startArea: CampaignMapTransitionAreas.Entry | undefined;
        readonly endArea: CampaignMapTransitionAreas.Entry | undefined;
    }
}
export default CampaignMapTransitionLinks;
