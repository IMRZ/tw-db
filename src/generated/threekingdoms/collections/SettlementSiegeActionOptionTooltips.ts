
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionOptionTooltips {
  export const KEY = new CollectionKey("settlement_siege_action_option_tooltips");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly tooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.tooltip = values["tooltip"];
    }
    
  }
}

export default SettlementSiegeActionOptionTooltips;
