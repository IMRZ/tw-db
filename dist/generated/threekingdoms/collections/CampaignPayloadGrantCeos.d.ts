import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { Ceos } from "./Ceos";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CampaignPayloadGrantCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _ceo: string;
        readonly _targetManagerType: string;
        readonly isRemoval: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
        get targetManagerType(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CampaignPayloadGrantCeos;
