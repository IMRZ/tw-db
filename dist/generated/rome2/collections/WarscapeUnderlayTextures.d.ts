import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace WarscapeUnderlayTextures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly underlayKey: string;
        readonly filename: string;
        readonly filepath: string;
        readonly levels: number;
        readonly orientationAngle: number;
        readonly width: number;
        readonly height: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default WarscapeUnderlayTextures;
