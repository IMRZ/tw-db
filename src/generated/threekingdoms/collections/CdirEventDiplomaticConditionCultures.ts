
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { Cultures } from "./Cultures";

export namespace CdirEventDiplomaticConditionCultures {
  export const KEY = new CollectionKey("cdir_event_diplomatic_condition_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomaticCondition: string;
    readonly _culture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomaticCondition = values["diplomatic_condition"];
      this._culture = values["culture"];
    }
    
    get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._diplomaticCondition);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CdirEventDiplomaticConditionCultures;
