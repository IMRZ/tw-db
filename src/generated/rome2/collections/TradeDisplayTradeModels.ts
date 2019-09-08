
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";

export namespace TradeDisplayTradeModels {
  export const KEY = new CollectionKey("trade_display_trade_models");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _model: string;
    readonly _optionalFollowingModel: string;
    readonly isNaval: boolean;
    readonly optionalFollowingModelDistance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._model = values["model"];
      this._optionalFollowingModel = values["optional_following_model"];
      this.isNaval = !!values["is_naval"];
      this.optionalFollowingModelDistance = values["optional_following_model_distance"];
    }
    
    get model(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get optionalFollowingModel(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._optionalFollowingModel);
    }
  }
}

export default TradeDisplayTradeModels;
