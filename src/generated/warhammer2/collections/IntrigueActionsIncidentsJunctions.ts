
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Incidents } from "./Incidents";

export namespace IntrigueActionsIncidentsJunctions {
  export const KEY = new CollectionKey("intrigue_actions_incidents_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _targetCulture: string;
    readonly _incident: string;
    readonly isPositive: boolean;
    readonly weight: number;
    readonly key: number;
    readonly _sourceCulture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._targetCulture = values["target_culture"];
      this._incident = values["incident"];
      this.isPositive = !!values["is_positive"];
      this.weight = values["weight"];
      this.key = values["key"];
      this._sourceCulture = values["source_culture"];
    }
    
    get targetCulture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._targetCulture);
    }
    
    get incident(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incident);
    }
    
    get sourceCulture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._sourceCulture);
    }
  }
}

export default IntrigueActionsIncidentsJunctions;
