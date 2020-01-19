import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EntityVfxAttachTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly attachType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EntityVfxAttachTypes;
