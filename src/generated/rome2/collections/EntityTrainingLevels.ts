
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EntityTrainingLevels {
  export const KEY = new CollectionKey("entity_training_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly trainingLevel: string;
    readonly maxOffsetDistance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.trainingLevel = values["training_level"];
      this.maxOffsetDistance = values["max_offset_distance"];
    }
    
  }
}

export default EntityTrainingLevels;
