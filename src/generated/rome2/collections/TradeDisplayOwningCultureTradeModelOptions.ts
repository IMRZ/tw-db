
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";

export namespace TradeDisplayOwningCultureTradeModelOptions {
  export const KEY = new CollectionKey("trade_display_owning_culture_trade_model_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _owningCulture: string;
    readonly _model: string;
    readonly priority: number;
    readonly relativeFrequency: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._owningCulture = values["owning_culture"];
      this._model = values["model"];
      this.priority = values["priority"];
      this.relativeFrequency = values["relative_frequency"];
    }
    
    get owningCulture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._owningCulture);
    }
    
    get model(): TradeDisplayTradeModels.Entry | undefined {
      const collection = <TradeDisplayTradeModels.Entry[]>this.collectionCache.getCollection(TradeDisplayTradeModels.KEY, TradeDisplayTradeModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default TradeDisplayOwningCultureTradeModelOptions;
