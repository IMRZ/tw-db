import { CollectionCache, CollectionKey } from "../../../common";
import { AudioSphereOfInfluences } from "./AudioSphereOfInfluences";
export declare namespace AudioSphereOfInfluenceOneShots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _sphere: string;
        readonly duration: number;
        readonly fadeIn: number;
        readonly fadeOut: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly sphere: AudioSphereOfInfluences.Entry | undefined;
    }
}
export default AudioSphereOfInfluenceOneShots;
