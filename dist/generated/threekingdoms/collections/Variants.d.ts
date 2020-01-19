import { CollectionCache, CollectionKey } from "../../../common";
import { AudioArmourTypes } from "./AudioArmourTypes";
import { AudioMeleeWeaponTypes } from "./AudioMeleeWeaponTypes";
import { AudioShieldTypes } from "./AudioShieldTypes";
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
        readonly _audioArmour: string;
        readonly _audioMeleeWeapon: string;
        readonly _audioShield: string;
        constructor(collectionCache: CollectionCache, values: any);
        get audioArmour(): AudioArmourTypes.Entry | undefined;
        get audioMeleeWeapon(): AudioMeleeWeaponTypes.Entry | undefined;
        get audioShield(): AudioShieldTypes.Entry | undefined;
    }
}
export default Variants;
