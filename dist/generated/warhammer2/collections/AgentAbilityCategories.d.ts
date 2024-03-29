import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AgentAbilityCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly onScreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AgentAbilityCategories;
