import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadBasicComponentTypes } from "./CampaignPayloadBasicComponentTypes";
export declare namespace CampaignPayloadBasicComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _componentType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get componentType(): CampaignPayloadBasicComponentTypes.Entry | undefined;
    }
}
export default CampaignPayloadBasicComponents;
