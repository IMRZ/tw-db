
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioAreaOfEffectPositioningTypes {
  export const KEY = new CollectionKey("audio_area_of_effect_positioning_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default AudioAreaOfEffectPositioningTypes;
