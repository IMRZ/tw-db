import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Incidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly uiImage: string;
        readonly uiIcon: string;
        readonly generate: boolean;
        readonly prioritised: boolean;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Incidents;
