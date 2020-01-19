import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CeoInitialDatas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _templateManager: string;
        constructor(collectionCache: CollectionCache, values: any);
        get templateManager(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CeoInitialDatas;
