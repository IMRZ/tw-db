import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsDilemmaChoices {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly choiceKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsDilemmaChoices;
