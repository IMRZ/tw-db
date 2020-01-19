import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioSphereOfInfluenceOneShots } from "./AudioSphereOfInfluenceOneShots";
export declare namespace AudioExplosions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly event: string;
        readonly maxAttenuation: number;
        readonly obstructionSize: number;
        readonly useReverb: boolean;
        readonly _groupSound: string;
        readonly onlyTriggerOncePerVolley: boolean;
        readonly _sphereOfInfluence: string;
        constructor(collectionCache: CollectionCache, values: any);
        get groupSound(): AudioGroupSounds.Entry | undefined;
        get sphereOfInfluence(): AudioSphereOfInfluenceOneShots.Entry | undefined;
    }
}
export default AudioExplosions;
