
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";

export namespace TechnologyRequiredProgressionLevelJunctions {
  export const KEY = new CollectionKey("technology_required_progression_level_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly progressionLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this.progressionLevel = values["progression_level"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
  }
}

export default TechnologyRequiredProgressionLevelJunctions;
