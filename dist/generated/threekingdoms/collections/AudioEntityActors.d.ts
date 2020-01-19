import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioEntityActors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly actorSwitch: string;
        readonly numberOfActors: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioEntityActors;
