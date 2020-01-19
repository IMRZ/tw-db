import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GroundTypeStatEffectGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupName: string;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GroundTypeStatEffectGroups;
