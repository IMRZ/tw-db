
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomaticRelationsRespectThresholds {
  export const KEY = new CollectionKey("diplomatic_relations_respect_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minValue: number;
    readonly localisedTitle: string;
    readonly maxValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minValue = values["min_value"];
      this.localisedTitle = values["localised_title"];
      this.maxValue = values["max_value"];
    }
    
  }
}

export default DiplomaticRelationsRespectThresholds;
