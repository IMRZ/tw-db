import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly red: number;
        readonly green: number;
        readonly blue: number;
        readonly description: string;
        readonly showInUied: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiColours;
