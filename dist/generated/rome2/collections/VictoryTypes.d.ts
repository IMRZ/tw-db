import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace VictoryTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly victoryType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default VictoryTypes;
