
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { Dilemmas } from "./Dilemmas";

export namespace CdirEventsMissionFollowupDilemmas {
  export const KEY = new CollectionKey("cdir_events_mission_followup_dilemmas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionKey: string;
    readonly _statusKey: string;
    readonly _followupDilemmaKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionKey = values["mission_key"];
      this._statusKey = values["status_key"];
      this._followupDilemmaKey = values["followup_dilemma_key"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get statusKey(): CdirEventsMissionStatuses.Entry | undefined {
      const collection = <CdirEventsMissionStatuses.Entry[]>this.collectionCache.getCollection(CdirEventsMissionStatuses.KEY, CdirEventsMissionStatuses.Entry);
      return collection.find(entry => entry.statusKey === this._statusKey);
    }
    
    get followupDilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._followupDilemmaKey);
    }
  }
}

export default CdirEventsMissionFollowupDilemmas;
