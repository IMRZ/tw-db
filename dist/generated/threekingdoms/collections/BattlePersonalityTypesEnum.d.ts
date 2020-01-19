import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlePersonalityTypesEnum {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlePersonalityTypesEnum;
