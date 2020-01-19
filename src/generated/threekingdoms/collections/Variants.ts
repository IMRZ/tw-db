
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioArmourTypes } from "./AudioArmourTypes";
import { AudioMeleeWeaponTypes } from "./AudioMeleeWeaponTypes";
import { AudioShieldTypes } from "./AudioShieldTypes";

export namespace Variants {
  export const KEY = new CollectionKey("variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.variantName = values["variant_name"];
      this.techFolder = values["tech_folder"];
      this.variantFilename = values["variant_filename"];
      this.scale = values["scale"];
      this.scaleVariation = values["scale_variation"];
      this.lowPolyFilename = values["low_poly_filename"];
      this.mountScale = values["mount_scale"];
      this._audioArmour = values["audio_armour"];
      this._audioMeleeWeapon = values["audio_melee_weapon"];
      this._audioShield = values["audio_shield"];
    }
    
    get audioArmour(): AudioArmourTypes.Entry | undefined {
      const collection = <AudioArmourTypes.Entry[]>this.collectionCache.getCollection(AudioArmourTypes.KEY, AudioArmourTypes.Entry);
      return collection.find(entry => entry.key === this._audioArmour);
    }
    
    get audioMeleeWeapon(): AudioMeleeWeaponTypes.Entry | undefined {
      const collection = <AudioMeleeWeaponTypes.Entry[]>this.collectionCache.getCollection(AudioMeleeWeaponTypes.KEY, AudioMeleeWeaponTypes.Entry);
      return collection.find(entry => entry.key === this._audioMeleeWeapon);
    }
    
    get audioShield(): AudioShieldTypes.Entry | undefined {
      const collection = <AudioShieldTypes.Entry[]>this.collectionCache.getCollection(AudioShieldTypes.KEY, AudioShieldTypes.Entry);
      return collection.find(entry => entry.key === this._audioShield);
    }
  }
}

export default Variants;
