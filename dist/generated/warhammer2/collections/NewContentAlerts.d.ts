import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace NewContentAlerts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly releaseOrder: number;
        readonly showOrder: number;
        readonly header: string;
        readonly description: string;
        readonly imagePath: string;
        readonly buttonUrl: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default NewContentAlerts;
