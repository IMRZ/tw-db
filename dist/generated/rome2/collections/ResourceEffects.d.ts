import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
export declare namespace ResourceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceKey: string;
        readonly _effectKey: any;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resourceKey: Resources.Entry | undefined;
    }
}
export default ResourceEffects;
