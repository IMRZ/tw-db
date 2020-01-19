import { CollectionCache, CollectionKey } from "../../../common";
import { CaiContextTypes } from "./CaiContextTypes";
export declare namespace CaiContextsForContextTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly contextKey: string;
        readonly _contextTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get contextTypeKey(): CaiContextTypes.Entry | undefined;
    }
}
export default CaiContextsForContextTypes;
