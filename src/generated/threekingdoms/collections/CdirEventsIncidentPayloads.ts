
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
import { CdirEventsTargets } from "./CdirEventsTargets";

export namespace CdirEventsIncidentPayloads {
  export const KEY = new CollectionKey("cdir_events_incident_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _incidentKey: string;
    readonly _payloadKey: string;
    readonly value: string;
    readonly _targetKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._incidentKey = values["incident_key"];
      this._payloadKey = values["payload_key"];
      this.value = values["value"];
      this._targetKey = values["target_key"];
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
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

export default CdirEventsIncidentPayloads;
