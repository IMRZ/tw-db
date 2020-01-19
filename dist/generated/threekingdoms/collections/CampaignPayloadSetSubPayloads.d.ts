import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadSets } from "./CampaignPayloadSets";
export declare namespace CampaignPayloadSetSubPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _payloadSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get payloadSet(): CampaignPayloadSets.Entry | undefined;
    }
}
export default CampaignPayloadSetSubPayloads;
