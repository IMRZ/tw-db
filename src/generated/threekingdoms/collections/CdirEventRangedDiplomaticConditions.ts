
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";

export namespace CdirEventRangedDiplomaticConditions {
  export const KEY = new CollectionKey("cdir_event_ranged_diplomatic_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomaticCondition: string;
    readonly min: number;
    readonly max: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomaticCondition = values["diplomatic_condition"];
      this.min = values["min"];
      this.max = values["max"];
    }
    
    get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._diplomaticCondition);
    }
  }
}

export default CdirEventRangedDiplomaticConditions;
