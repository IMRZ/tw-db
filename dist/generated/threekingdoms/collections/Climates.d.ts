import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Climates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly climateType: string;
        readonly name: string;
        readonly description: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Climates;
