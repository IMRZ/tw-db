import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTemplates } from "./RetinueTemplates";
export declare namespace Retinues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _template: string;
        constructor(collectionCache: CollectionCache, values: any);
        get template(): RetinueTemplates.Entry | undefined;
    }
}
export default Retinues;
