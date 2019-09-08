import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
export declare namespace SlotTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _resource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resource: Resources.Entry | undefined;
    }
}
export default SlotTemplates;
