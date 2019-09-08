
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { Incidents } from "./Incidents";

export namespace CdirEventsMissionIncidents {
  export const KEY = new CollectionKey("cdir_events_mission_incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionKey: string;
    readonly _statusKey: string;
    readonly _incidentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionKey = values["mission_key"];
      this._statusKey = values["status_key"];
      this._incidentKey = values["incident_key"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get statusKey(): CdirEventsMissionStatuses.Entry | undefined {
      const collection = <CdirEventsMissionStatuses.Entry[]>this.collectionCache.getCollection(CdirEventsMissionStatuses.KEY, CdirEventsMissionStatuses.Entry);
      return collection.find(entry => entry.statusKey === this._statusKey);
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
  }
}

export default CdirEventsMissionIncidents;
