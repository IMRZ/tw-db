import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Variants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly variantName: string;
        readonly techFolder: string;
        readonly variantFilename: string;
        readonly scale: number;
        readonly scaleVariation: number;
        readonly lowPolyFilename: string;
        readonly mountScale: number;
        readonly superLowPolyFilename: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Variants;
