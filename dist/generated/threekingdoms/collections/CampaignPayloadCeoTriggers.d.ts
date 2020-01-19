import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CeoTriggers } from "./CeoTriggers";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CampaignPayloadCeoTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _trigger: string;
        readonly _targetManagerType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get trigger(): CeoTriggers.Entry | undefined;
        get targetManagerType(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CampaignPayloadCeoTriggers;
