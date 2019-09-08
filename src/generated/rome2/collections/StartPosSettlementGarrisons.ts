
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosSettlements } from "./StartPosSettlements";
import { MainUnits } from "./MainUnits";

export namespace StartPosSettlementGarrisons {
  export const KEY = new CollectionKey("start_pos_settlement_garrisons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _settlement: number;
    readonly _unit: string;
    readonly soldiers: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._settlement = values["settlement"];
      this._unit = values["unit"];
      this.soldiers = values["soldiers"];
    }
    
    get settlement(): StartPosSettlements.Entry | undefined {
      const collection = <StartPosSettlements.Entry[]>this.collectionCache.getCollection(StartPosSettlements.KEY, StartPosSettlements.Entry);
      return collection.find(entry => entry.id === this._settlement);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default StartPosSettlementGarrisons;
