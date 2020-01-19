import { CollectionCache, CollectionKey } from "../../../common";
import { SplineTypes } from "./SplineTypes";
export declare namespace CustomSplines {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly material: string;
        readonly width: number;
        readonly adjustHeightToTerrain: boolean;
        readonly isVertical: boolean;
        readonly _splineType: string;
        readonly maxSubdivisions: number;
        constructor(collectionCache: CollectionCache, values: any);
        get splineType(): SplineTypes.Entry | undefined;
    }
}
export default CustomSplines;
