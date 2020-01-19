
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Regions } from "./Regions";
import { VictoryTypes } from "./VictoryTypes";

export namespace StartPosVictoryConditions {
  export const KEY = new CollectionKey("start_pos_victory_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _startPosFaction: number;
    readonly _region: string;
    readonly _victoryType: string;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._startPosFaction = values["start_pos_faction"];
      this._region = values["region"];
      this._victoryType = values["victory_type"];
      this.unique = !!values["unique"];
    }
    
    get startPosFaction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._startPosFaction);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get victoryType(): VictoryTypes.Entry | undefined {
      const collection = <VictoryTypes.Entry[]>this.collectionCache.getCollection(VictoryTypes.KEY, VictoryTypes.Entry);
      return collection.find(entry => entry.victoryType === this._victoryType);
    }
  }
}

export default StartPosVictoryConditions;
