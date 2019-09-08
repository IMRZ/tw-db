
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { Missions } from "./Missions";

export namespace CdirEventsIncidentFollowupMissions {
  export const KEY = new CollectionKey("cdir_events_incident_followup_missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incidentKey: string;
    readonly _followupMissionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incidentKey = values["incident_key"];
      this._followupMissionKey = values["followup_mission_key"];
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
    
    get followupMissionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._followupMissionKey);
    }
  }
}

export default CdirEventsIncidentFollowupMissions;
