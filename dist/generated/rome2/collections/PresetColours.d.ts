import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PresetColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly red: number;
        readonly green: number;
        readonly blue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PresetColours;
