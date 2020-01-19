import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignEffectGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly hiddenOnUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignEffectGroups;
