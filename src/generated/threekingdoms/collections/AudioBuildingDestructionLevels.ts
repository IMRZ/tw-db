
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBuildingDestructionLevels {
  export const KEY = new CollectionKey("audio_building_destruction_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly soundEventDamaged: string;
    readonly soundEventDestroyed: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.soundEventDamaged = values["sound_event_damaged"];
      this.soundEventDestroyed = values["sound_event_destroyed"];
    }
    
  }
}

export default AudioBuildingDestructionLevels;
