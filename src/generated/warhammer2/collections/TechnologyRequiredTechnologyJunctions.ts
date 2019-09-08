
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";

export namespace TechnologyRequiredTechnologyJunctions {
  export const KEY = new CollectionKey("technology_required_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _requiredTechnology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._requiredTechnology = values["required_technology"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
    
    get requiredTechnology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._requiredTechnology);
    }
  }
}

export default TechnologyRequiredTechnologyJunctions;
