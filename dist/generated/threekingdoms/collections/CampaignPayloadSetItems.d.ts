import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadSets } from "./CampaignPayloadSets";
import { CampaignPayloads } from "./CampaignPayloads";
export declare namespace CampaignPayloadSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payloadSet: string;
        readonly minValue: number;
        readonly maxValue: number;
        readonly _payload: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payloadSet(): CampaignPayloadSets.Entry | undefined;
        get payload(): CampaignPayloads.Entry | undefined;
    }
}
export default CampaignPayloadSetItems;
