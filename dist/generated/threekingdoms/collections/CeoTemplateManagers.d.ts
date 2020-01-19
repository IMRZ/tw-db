import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CeoTemplateManagers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _behviour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get behviour(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CeoTemplateManagers;
