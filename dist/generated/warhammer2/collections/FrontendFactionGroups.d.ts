import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FrontendFactionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FrontendFactionGroups;
