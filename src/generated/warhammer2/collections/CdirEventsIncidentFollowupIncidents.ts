
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";

export namespace CdirEventsIncidentFollowupIncidents {
  export const KEY = new CollectionKey("cdir_events_incident_followup_incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incidentKey: string;
    readonly _followupIncidentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incidentKey = values["incident_key"];
      this._followupIncidentKey = values["followup_incident_key"];
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
    
    get followupIncidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._followupIncidentKey);
    }
  }
}

export default CdirEventsIncidentFollowupIncidents;
