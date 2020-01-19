
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CdirEventDiplomaticConditionSubcultures {
  export const KEY = new CollectionKey("cdir_event_diplomatic_condition_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomaticCondition: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomaticCondition = values["diplomatic_condition"];
      this._subculture = values["subculture"];
    }
    
    get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._diplomaticCondition);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default CdirEventDiplomaticConditionSubcultures;
