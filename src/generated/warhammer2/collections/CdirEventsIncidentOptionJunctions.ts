
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsOptions } from "./CdirEventsOptions";

export namespace CdirEventsIncidentOptionJunctions {
  export const KEY = new CollectionKey("cdir_events_incident_option_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _incidentKey: string;
    readonly _optionKey: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._incidentKey = values["incident_key"];
      this._optionKey = values["option_key"];
      this.value = values["value"];
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
    
    get optionKey(): CdirEventsOptions.Entry | undefined {
      const collection = <CdirEventsOptions.Entry[]>this.collectionCache.getCollection(CdirEventsOptions.KEY, CdirEventsOptions.Entry);
      return collection.find(entry => entry.optionKey === this._optionKey);
    }
  }
}

export default CdirEventsIncidentOptionJunctions;
