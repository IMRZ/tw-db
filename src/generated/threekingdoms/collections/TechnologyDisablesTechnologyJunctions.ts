
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";

export namespace TechnologyDisablesTechnologyJunctions {
  export const KEY = new CollectionKey("technology_disables_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _disabledTechnology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._disabledTechnology = values["disabled_technology"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
    
    get disabledTechnology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._disabledTechnology);
    }
  }
}

export default TechnologyDisablesTechnologyJunctions;
