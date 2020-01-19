
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { Dilemmas } from "./Dilemmas";

export namespace CdirEventsIncidentFollowupDilemmas {
  export const KEY = new CollectionKey("cdir_events_incident_followup_dilemmas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incidentKey: string;
    readonly _followupDliemmaKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incidentKey = values["incident_key"];
      this._followupDliemmaKey = values["followup_dliemma_key"];
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
    
    get followupDliemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._followupDliemmaKey);
    }
  }
}

export default CdirEventsIncidentFollowupDilemmas;
