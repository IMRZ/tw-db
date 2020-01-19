import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioEntityTypeLimitations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nearInside: number;
        readonly nearOutside: number;
        readonly farInside: number;
        readonly farOutside: number;
        readonly maxDistanceAnimationDriven: number;
        readonly animationUncapped: boolean;
        readonly maxDistanceCodeDriven: number;
        readonly canPlayAtBone: boolean;
        readonly codeUncapped: boolean;
        readonly allowsFocus: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioEntityTypeLimitations;
