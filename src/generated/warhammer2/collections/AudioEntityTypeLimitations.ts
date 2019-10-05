
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioEntityTypeLimitations {
  export const KEY = new CollectionKey("audio_entity_type_limitations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nearInside: number;
    readonly nearOutside: number;
    readonly farInside: number;
    readonly farOutside: number;
    readonly maxDistanceAnimationDriven: number;
    readonly animationUncapped: boolean;
    readonly maxDistanceCodeDriven: number;
    readonly canPlayAtBone: boolean;
    readonly codeUncapped: boolean;
    readonly containsUniqueEntitySwitches: boolean;
    readonly allowsFocus: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nearInside = values["near_inside"];
      this.nearOutside = values["near_outside"];
      this.farInside = values["far_inside"];
      this.farOutside = values["far_outside"];
      this.maxDistanceAnimationDriven = values["max_distance_animation_driven"];
      this.animationUncapped = !!values["animation_uncapped"];
      this.maxDistanceCodeDriven = values["max_distance_code_driven"];
      this.canPlayAtBone = !!values["can_play_at_bone"];
      this.codeUncapped = !!values["code_uncapped"];
      this.containsUniqueEntitySwitches = !!values["contains_unique_entity_switches"];
      this.allowsFocus = !!values["allows_focus"];
    }
    
  }
}

export default AudioEntityTypeLimitations;
