import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioCampaignEnvironments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly isDefault: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioCampaignEnvironments;
