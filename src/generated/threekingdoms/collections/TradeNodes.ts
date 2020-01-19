
import { CollectionCache, CollectionKey } from "../../../common";
import { Commodities } from "./Commodities";
import { TradeNodeGroups } from "./TradeNodeGroups";

export namespace TradeNodes {
  export const KEY = new CollectionKey("trade_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _commodity: string;
    readonly baseQuantity: number;
    readonly percentageIncreasePerAgent: number;
    readonly maximumPercentageIncrease: number;
    readonly displayName: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._commodity = values["commodity"];
      this.baseQuantity = values["base_quantity"];
      this.percentageIncreasePerAgent = values["percentage_increase_per_agent"];
      this.maximumPercentageIncrease = values["maximum_percentage_increase"];
      this.displayName = values["display_name"];
      this._group = values["group"];
    }
    
    get commodity(): Commodities.Entry | undefined {
      const collection = <Commodities.Entry[]>this.collectionCache.getCollection(Commodities.KEY, Commodities.Entry);
      return collection.find(entry => entry._key === this._commodity);
    }
    
    get group(): TradeNodeGroups.Entry | undefined {
      const collection = <TradeNodeGroups.Entry[]>this.collectionCache.getCollection(TradeNodeGroups.KEY, TradeNodeGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default TradeNodes;
