
import { CollectionCache, CollectionKey } from "../../../common";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";

export namespace TradeDisplayGenericTradeModelOptions {
  export const KEY = new CollectionKey("trade_display_generic_trade_model_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _model: string;
    readonly priority: number;
    readonly relativeFrequency: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._model = values["model"];
      this.priority = values["priority"];
      this.relativeFrequency = values["relative_frequency"];
    }
    
    get model(): TradeDisplayTradeModels.Entry | undefined {
      const collection = <TradeDisplayTradeModels.Entry[]>this.collectionCache.getCollection(TradeDisplayTradeModels.KEY, TradeDisplayTradeModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default TradeDisplayGenericTradeModelOptions;
