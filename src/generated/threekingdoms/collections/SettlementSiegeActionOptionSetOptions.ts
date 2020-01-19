
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptionSets } from "./SettlementSiegeActionOptionSets";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";

export namespace SettlementSiegeActionOptionSetOptions {
  export const KEY = new CollectionKey("settlement_siege_action_option_set_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _option: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._option = values["option"];
    }
    
    get set(): SettlementSiegeActionOptionSets.Entry | undefined {
      const collection = <SettlementSiegeActionOptionSets.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptionSets.KEY, SettlementSiegeActionOptionSets.Entry);
      return collection.find(entry => entry.set === this._set);
    }
    
    get option(): SettlementSiegeActionOptions.Entry | undefined {
      const collection = <SettlementSiegeActionOptions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptions.KEY, SettlementSiegeActionOptions.Entry);
      return collection.find(entry => entry.settlementSiegeActionOption === this._option);
    }
  }
}

export default SettlementSiegeActionOptionSetOptions;
