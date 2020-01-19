import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CeoTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _targetLocation: string;
        readonly payloadDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        get targetLocation(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CeoTriggers;
