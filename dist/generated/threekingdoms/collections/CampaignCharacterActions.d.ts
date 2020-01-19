import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignCharacterActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly action: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignCharacterActions;
