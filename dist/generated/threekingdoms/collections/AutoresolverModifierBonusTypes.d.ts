import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AutoresolverModifierBonusTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AutoresolverModifierBonusTypes;
