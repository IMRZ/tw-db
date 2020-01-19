
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { Missions } from "./Missions";

export namespace CdirEventsDilemmaFollowupMissions {
  export const KEY = new CollectionKey("cdir_events_dilemma_followup_missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _dilemmaKey: string;
    readonly _choiceKey: string;
    readonly _followupMissionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._dilemmaKey = values["dilemma_key"];
      this._choiceKey = values["choice_key"];
      this._followupMissionKey = values["followup_mission_key"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined {
      const collection = <CdirEventsDilemmaChoices.Entry[]>this.collectionCache.getCollection(CdirEventsDilemmaChoices.KEY, CdirEventsDilemmaChoices.Entry);
      return collection.find(entry => entry.choiceKey === this._choiceKey);
    }
    
    get followupMissionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._followupMissionKey);
    }
  }
}

export default CdirEventsDilemmaFollowupMissions;
