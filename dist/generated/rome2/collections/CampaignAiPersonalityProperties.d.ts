import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAiPersonalityProperties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly property: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAiPersonalityProperties;
