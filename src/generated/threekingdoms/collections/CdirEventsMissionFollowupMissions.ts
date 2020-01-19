
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";

export namespace CdirEventsMissionFollowupMissions {
  export const KEY = new CollectionKey("cdir_events_mission_followup_missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionKey: string;
    readonly _statusKey: string;
    readonly _followupMissionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionKey = values["mission_key"];
      this._statusKey = values["status_key"];
      this._followupMissionKey = values["followup_mission_key"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get statusKey(): CdirEventsMissionStatuses.Entry | undefined {
      const collection = <CdirEventsMissionStatuses.Entry[]>this.collectionCache.getCollection(CdirEventsMissionStatuses.KEY, CdirEventsMissionStatuses.Entry);
      return collection.find(entry => entry.statusKey === this._statusKey);
    }
    
    get followupMissionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._followupMissionKey);
    }
  }
}

export default CdirEventsMissionFollowupMissions;
