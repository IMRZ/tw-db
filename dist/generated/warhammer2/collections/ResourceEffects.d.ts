import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Effects } from "./Effects";
export declare namespace ResourceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceKey: string;
        readonly _effectKey: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resourceKey: Resources.Entry | undefined;
        readonly effectKey: Effects.Entry | undefined;
    }
}
export default ResourceEffects;
