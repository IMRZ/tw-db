
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCameraShakeParameters {
  export const KEY = new CollectionKey("battle_camera_shake_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly octaves: number;
    readonly octaveAmplitudeMultiplier: number;
    readonly octaveFrequencyMultiplier: number;
    readonly horizontalAmplitude: number;
    readonly horizontalFrequency: number;
    readonly verticalAmplitude: number;
    readonly verticalFrequency: number;
    readonly rollAmplitude: number;
    readonly rollFrequency: number;
    readonly pitchAmplitude: number;
    readonly pitchFrequency: number;
    readonly yawAmplitude: number;
    readonly yawFrequency: number;
    readonly attack: number;
    readonly decay: number;
    readonly sustain: number;
    readonly release: number;
    readonly sustainMultiplier: number;
    readonly fallOffDistance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.octaves = values["octaves"];
      this.octaveAmplitudeMultiplier = values["octave_amplitude_multiplier"];
      this.octaveFrequencyMultiplier = values["octave_frequency_multiplier"];
      this.horizontalAmplitude = values["horizontal_amplitude"];
      this.horizontalFrequency = values["horizontal_frequency"];
      this.verticalAmplitude = values["vertical_amplitude"];
      this.verticalFrequency = values["vertical_frequency"];
      this.rollAmplitude = values["roll_amplitude"];
      this.rollFrequency = values["roll_frequency"];
      this.pitchAmplitude = values["pitch_amplitude"];
      this.pitchFrequency = values["pitch_frequency"];
      this.yawAmplitude = values["yaw_amplitude"];
      this.yawFrequency = values["yaw_frequency"];
      this.attack = values["attack"];
      this.decay = values["decay"];
      this.sustain = values["sustain"];
      this.release = values["release"];
      this.sustainMultiplier = values["sustain_multiplier"];
      this.fallOffDistance = values["fall_off_distance"];
    }
    
  }
}

export default BattleCameraShakeParameters;
