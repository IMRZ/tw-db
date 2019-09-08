import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Dilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiImage: string;
        readonly uiIcon: string;
        readonly generate: boolean;
        readonly prioritized: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Dilemmas;
