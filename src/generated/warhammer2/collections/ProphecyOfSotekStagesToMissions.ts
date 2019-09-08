
import { CollectionCache, CollectionKey } from "../../../common";
import { ProphecyOfSotekStages } from "./ProphecyOfSotekStages";
import { Missions } from "./Missions";

export namespace ProphecyOfSotekStagesToMissions {
  export const KEY = new CollectionKey("prophecy_of_sotek_stages_to_missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stage: string;
    readonly _mission: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stage = values["stage"];
      this._mission = values["mission"];
      this.order = values["order"];
    }
    
    get stage(): ProphecyOfSotekStages.Entry | undefined {
      const collection = <ProphecyOfSotekStages.Entry[]>this.collectionCache.getCollection(ProphecyOfSotekStages.KEY, ProphecyOfSotekStages.Entry);
      return collection.find(entry => entry.stage === this._stage);
    }
    
    get mission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._mission);
    }
  }
}

export default ProphecyOfSotekStagesToMissions;
