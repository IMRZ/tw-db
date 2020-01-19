import { CollectionCache, CollectionKey } from "../../../common";
import { AudioProjectilesEnums } from "./AudioProjectilesEnums";
export declare namespace AudioProjectiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _audioProjectileType: string;
        readonly playIncomingSound: boolean;
        readonly maxAttenuationFire: number;
        readonly maxAttenuationInflight: number;
        readonly maxAttenuationImpact: number;
        readonly requiresSpeed: boolean;
        readonly requiresDistance: boolean;
        readonly inflightMinSpeed: number;
        constructor(collectionCache: CollectionCache, values: any);
        get audioProjectileType(): AudioProjectilesEnums.Entry | undefined;
    }
}
export default AudioProjectiles;
