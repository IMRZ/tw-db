import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadBasicValueComponentTypes } from "./CampaignPayloadBasicValueComponentTypes";
export declare namespace CampaignPayloadBasicValueComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _componentType: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get componentType(): CampaignPayloadBasicValueComponentTypes.Entry | undefined;
    }
}
export default CampaignPayloadBasicValueComponents;
