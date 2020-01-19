import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadSetParameters } from "./CampaignPayloadSetParameters";
export declare namespace CampaignPayloadSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _parameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get parameter(): CampaignPayloadSetParameters.Entry | undefined;
    }
}
export default CampaignPayloadSets;
