
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { MissionIssuers } from "./MissionIssuers";

export namespace CdirEventsMissionIssuerJunctions {
  export const KEY = new CollectionKey("cdir_events_mission_issuer_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionKey: string;
    readonly _issuerKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionKey = values["mission_key"];
      this._issuerKey = values["issuer_key"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get issuerKey(): MissionIssuers.Entry | undefined {
      const collection = <MissionIssuers.Entry[]>this.collectionCache.getCollection(MissionIssuers.KEY, MissionIssuers.Entry);
      return collection.find(entry => entry.issuerKey === this._issuerKey);
    }
  }
}

export default CdirEventsMissionIssuerJunctions;
