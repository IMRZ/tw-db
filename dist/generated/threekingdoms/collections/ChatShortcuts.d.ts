import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ChatShortcuts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly description: string;
        readonly _gameArea: any;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ChatShortcuts;
