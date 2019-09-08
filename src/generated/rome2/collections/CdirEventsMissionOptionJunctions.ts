
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionOptions } from "./CdirEventsMissionOptions";

export namespace CdirEventsMissionOptionJunctions {
  export const KEY = new CollectionKey("cdir_events_mission_option_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _missionKey: string;
    readonly _optionKey: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._missionKey = values["mission_key"];
      this._optionKey = values["option_key"];
      this.value = values["value"];
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
    
    get optionKey(): CdirEventsMissionOptions.Entry | undefined {
      const collection = <CdirEventsMissionOptions.Entry[]>this.collectionCache.getCollection(CdirEventsMissionOptions.KEY, CdirEventsMissionOptions.Entry);
      return collection.find(entry => entry.optionKey === this._optionKey);
    }
  }
}

export default CdirEventsMissionOptionJunctions;
