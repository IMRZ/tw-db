import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaBuildingChainGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupName: string;
        readonly localisedName: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaBuildingChainGroups;
