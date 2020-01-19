import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadWeightedSets } from "./CampaignPayloadWeightedSets";
import { CampaignPayloads } from "./CampaignPayloads";
export declare namespace CampaignPayloadWeightedSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _weightedSet: string;
        readonly _payload: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get weightedSet(): CampaignPayloadWeightedSets.Entry | undefined;
        get payload(): CampaignPayloads.Entry | undefined;
    }
}
export default CampaignPayloadWeightedSetItems;
