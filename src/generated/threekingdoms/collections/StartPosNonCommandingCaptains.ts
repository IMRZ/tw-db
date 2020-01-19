
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { Retinues } from "./Retinues";

export namespace StartPosNonCommandingCaptains {
  export const KEY = new CollectionKey("start_pos_non_commanding_captains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _generalCommandingForce: number;
    readonly _captainRetinue: string;
    readonly captainRetinueId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._generalCommandingForce = values["general_commanding_force"];
      this._captainRetinue = values["captain_retinue"];
      this.captainRetinueId = values["captain_retinue_id"];
    }
    
    get generalCommandingForce(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._generalCommandingForce);
    }
    
    get captainRetinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._captainRetinue);
    }
  }
}

export default StartPosNonCommandingCaptains;
