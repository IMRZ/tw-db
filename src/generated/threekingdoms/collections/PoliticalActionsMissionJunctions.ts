
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Missions } from "./Missions";

export namespace PoliticalActionsMissionJunctions {
  export const KEY = new CollectionKey("political_actions_mission_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _politicalAction: string;
    readonly _mission: string;
    readonly weighting: number;
    readonly optimalOutcome: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._politicalAction = values["political_action"];
      this._mission = values["mission"];
      this.weighting = values["weighting"];
      this.optimalOutcome = !!values["optimal_outcome"];
    }
    
    get politicalAction(): PoliticalActions.Entry | undefined {
      const collection = <PoliticalActions.Entry[]>this.collectionCache.getCollection(PoliticalActions.KEY, PoliticalActions.Entry);
      return collection.find(entry => entry.politicalActionKey === this._politicalAction);
    }
    
    get mission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._mission);
    }
  }
}

export default PoliticalActionsMissionJunctions;
