import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Events {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly dynamic: boolean;
        readonly onscreenName: string;
        readonly eventText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Events;
