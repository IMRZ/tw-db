import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PreBattleSpeechTypesEnum {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly index: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PreBattleSpeechTypesEnum;
