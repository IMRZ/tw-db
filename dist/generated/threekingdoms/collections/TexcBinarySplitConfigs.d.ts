import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TexcBinarySplitConfigs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly tableName: string;
        readonly keyExpression: string;
        readonly binaryExtension: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TexcBinarySplitConfigs;
