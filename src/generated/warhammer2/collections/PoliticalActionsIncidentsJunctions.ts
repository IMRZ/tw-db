
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Incidents } from "./Incidents";

export namespace PoliticalActionsIncidentsJunctions {
  export const KEY = new CollectionKey("political_actions_incidents_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _politicalAction: string;
    readonly _incident: string;
    readonly weighting: number;
    readonly optimalOutcome: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._politicalAction = values["political_action"];
      this._incident = values["incident"];
      this.weighting = values["weighting"];
      this.optimalOutcome = !!values["optimal_outcome"];
    }
    
    get politicalAction(): PoliticalActions.Entry | undefined {
      const collection = <PoliticalActions.Entry[]>this.collectionCache.getCollection(PoliticalActions.KEY, PoliticalActions.Entry);
      return collection.find(entry => entry.politicalActionKey === this._politicalAction);
    }
    
    get incident(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incident);
    }
  }
}

export default PoliticalActionsIncidentsJunctions;
