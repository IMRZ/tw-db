
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
import { CdirEventsTargets } from "./CdirEventsTargets";

export namespace CdirEventsMissionPayloads {
  export const KEY = new CollectionKey("cdir_events_mission_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _missionKey: string;
    readonly _statusKey: string;
    readonly _payloadKey: string;
    readonly value: string;
    readonly _targetKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._missionKey = values["mission_key"];
      this._statusKey = values["status_key"];
      this._payloadKey = values["payload_key"];
      this.value = values["value"];
      this._targetKey = values["target_key"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get statusKey(): CdirEventsMissionStatuses.Entry | undefined {
      const collection = <CdirEventsMissionStatuses.Entry[]>this.collectionCache.getCollection(CdirEventsMissionStatuses.KEY, CdirEventsMissionStatuses.Entry);
      return collection.find(entry => entry.statusKey === this._statusKey);
    }
    
    get payloadKey(): CdirEventsPayloads.Entry | undefined {
      const collection = <CdirEventsPayloads.Entry[]>this.collectionCache.getCollection(CdirEventsPayloads.KEY, CdirEventsPayloads.Entry);
      return collection.find(entry => entry.payloadKey === this._payloadKey);
    }
    
    get targetKey(): CdirEventsTargets.Entry | undefined {
      const collection = <CdirEventsTargets.Entry[]>this.collectionCache.getCollection(CdirEventsTargets.KEY, CdirEventsTargets.Entry);
      return collection.find(entry => entry.targetKey === this._targetKey);
    }
  }
}

export default CdirEventsMissionPayloads;
