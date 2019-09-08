import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionVariableKey: string;
        readonly value: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FactionVariables;
