import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace HelpPageIndexRecords {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly text: string;
        readonly displayOrder: number;
        readonly insetLevel: number;
        readonly isBattle: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default HelpPageIndexRecords;
