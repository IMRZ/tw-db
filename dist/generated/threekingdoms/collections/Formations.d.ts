import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Formations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly formation: string;
        readonly isNaval: boolean;
        readonly isArmy: boolean;
        readonly name: string;
        readonly tooltip: string;
        readonly description: string;
        readonly iconName: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Formations;
