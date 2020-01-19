import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadWeightedSets } from "./CampaignPayloadWeightedSets";
export declare namespace CampaignPayloadRandomSubPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _weightedSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get weightedSet(): CampaignPayloadWeightedSets.Entry | undefined;
    }
}
export default CampaignPayloadRandomSubPayloads;
