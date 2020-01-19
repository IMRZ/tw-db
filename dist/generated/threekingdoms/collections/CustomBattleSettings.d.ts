import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CustomBattleSettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CustomBattleSettings;
