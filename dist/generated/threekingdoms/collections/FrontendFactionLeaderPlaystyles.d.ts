import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FrontendFactionLeaderPlaystyles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedTooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FrontendFactionLeaderPlaystyles;
