import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAutoresolverSkirmishEffectivenessRelativeToSpeeds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly relativeSpeedSkirmisherToOther: number;
        readonly proportionalEffectivenessSkirmisherToOther: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAutoresolverSkirmishEffectivenessRelativeToSpeeds;
