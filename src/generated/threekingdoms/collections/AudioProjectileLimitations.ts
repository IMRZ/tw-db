
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioProjectileLimitations {
  export const KEY = new CollectionKey("audio_projectile_limitations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nearInside: number;
    readonly nearOutside: number;
    readonly farInside: number;
    readonly farOutside: number;
    readonly uncapped: boolean;
    readonly maxDistance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nearInside = values["near_inside"];
      this.nearOutside = values["near_outside"];
      this.farInside = values["far_inside"];
      this.farOutside = values["far_outside"];
      this.uncapped = !!values["uncapped"];
      this.maxDistance = values["max_distance"];
    }
    
  }
}

export default AudioProjectileLimitations;
