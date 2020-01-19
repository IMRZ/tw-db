import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTypes } from "./RetinueTypes";
export declare namespace RetinueTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _retinueType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get retinueType(): RetinueTypes.Entry | undefined;
    }
}
export default RetinueTemplates;
