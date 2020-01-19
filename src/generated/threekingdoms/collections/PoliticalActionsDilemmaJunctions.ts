
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Dilemmas } from "./Dilemmas";

export namespace PoliticalActionsDilemmaJunctions {
  export const KEY = new CollectionKey("political_actions_dilemma_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _politiicalAction: string;
    readonly _dilemma: string;
    readonly weighting: number;
    readonly optimalOutcome: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._politiicalAction = values["politiical_action"];
      this._dilemma = values["dilemma"];
      this.weighting = values["weighting"];
      this.optimalOutcome = !!values["optimal_outcome"];
    }
    
    get politiicalAction(): PoliticalActions.Entry | undefined {
      const collection = <PoliticalActions.Entry[]>this.collectionCache.getCollection(PoliticalActions.KEY, PoliticalActions.Entry);
      return collection.find(entry => entry.politicalActionKey === this._politiicalAction);
    }
    
    get dilemma(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemma);
    }
  }
}

export default PoliticalActionsDilemmaJunctions;
