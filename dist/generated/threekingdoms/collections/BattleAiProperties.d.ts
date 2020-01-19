import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleAiProperties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly property: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleAiProperties;
