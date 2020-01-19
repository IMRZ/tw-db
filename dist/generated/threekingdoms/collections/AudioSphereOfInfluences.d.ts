import { CollectionCache, CollectionKey } from "../../../common";
import { AudioSphereOfInfluenceGroups } from "./AudioSphereOfInfluenceGroups";
export declare namespace AudioSphereOfInfluences {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _group: string;
        readonly minCameraDistance: number;
        readonly maxCameraDistance: number;
        readonly minInfluenceDistance: number;
        readonly maxInfluenceDistance: number;
        readonly maxInfluence: number;
        readonly maxVisualAttenuation: number;
        readonly priority: number;
        readonly isReversed: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): AudioSphereOfInfluenceGroups.Entry | undefined;
    }
}
export default AudioSphereOfInfluences;
