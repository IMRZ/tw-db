
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Sounds {
  export const KEY = new CollectionKey("sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly sampleName: string;
    readonly looped: boolean;
    readonly ignorePause: boolean;
    readonly prefType: string;
    readonly priority: number;
    readonly volume: number;
    readonly probability: number;
    readonly minPitch: number;
    readonly maxPitch: number;
    readonly fadeIn: number;
    readonly fadeOut: number;
    readonly startDelay: number;
    readonly triggerDelay: number;
    readonly randVolume: number;
    readonly is3D: boolean;
    readonly minDist: number;
    readonly maxDist: number;
    readonly distancePriority: number;
    readonly probabilityRadius: number;
    readonly effectLevel: number;
    readonly streamed: boolean;
    readonly pan: number;
    readonly dryLevel: number;
    readonly wetLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.sampleName = values["sample_name"];
      this.looped = !!values["looped"];
      this.ignorePause = !!values["ignore_pause"];
      this.prefType = values["pref_type"];
      this.priority = values["priority"];
      this.volume = values["volume"];
      this.probability = values["probability"];
      this.minPitch = values["min_pitch"];
      this.maxPitch = values["max_pitch"];
      this.fadeIn = values["fade_in"];
      this.fadeOut = values["fade_out"];
      this.startDelay = values["start_delay"];
      this.triggerDelay = values["trigger_delay"];
      this.randVolume = values["rand_volume"];
      this.is3D = !!values["is_3d"];
      this.minDist = values["min_dist"];
      this.maxDist = values["max_dist"];
      this.distancePriority = values["distance_priority"];
      this.probabilityRadius = values["probability_radius"];
      this.effectLevel = values["effect_level"];
      this.streamed = !!values["streamed"];
      this.pan = values["pan"];
      this.dryLevel = values["dry_level"];
      this.wetLevel = values["wet_level"];
    }
    
  }
}

export default Sounds;
