
import { CollectionCache, CollectionKey } from "../../../common";
import { SendDiplomatOutcomes } from "./SendDiplomatOutcomes";
import { Cultures } from "./Cultures";
import { Incidents } from "./Incidents";

export namespace SendDiplomatIncidents {
  export const KEY = new CollectionKey("send_diplomat_incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _outcome: string;
    readonly _culture: string;
    readonly _incident: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._outcome = values["outcome"];
      this._culture = values["culture"];
      this._incident = values["incident"];
      this.weight = values["weight"];
    }
    
    get outcome(): SendDiplomatOutcomes.Entry | undefined {
      const collection = <SendDiplomatOutcomes.Entry[]>this.collectionCache.getCollection(SendDiplomatOutcomes.KEY, SendDiplomatOutcomes.Entry);
      return collection.find(entry => entry.key === this._outcome);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get incident(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incident);
    }
  }
}

export default SendDiplomatIncidents;
