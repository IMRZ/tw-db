import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
export declare namespace AudioMissileWeaponTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly fireStartEvent: string;
        readonly fireMaxAttenuation: number;
        readonly _groupFire: string;
        readonly fireStopEvent: string;
        readonly onlyTriggerOncePerVolley: boolean;
        readonly fireUseReverb: boolean;
        readonly fireObstructionSize: number;
        readonly _groupFireStart: string;
        readonly _groupFireStop: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groupFire: AudioGroupSounds.Entry | undefined;
        readonly groupFireStart: AudioGroupSounds.Entry | undefined;
        readonly groupFireStop: AudioGroupSounds.Entry | undefined;
    }
}
export default AudioMissileWeaponTypes;
