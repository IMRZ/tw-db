import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AdviceInfoTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        readonly persistant: boolean;
        readonly showOnNavigate: boolean;
        readonly showInstant: boolean;
        readonly isHeader: boolean;
        readonly navigationOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AdviceInfoTexts;
