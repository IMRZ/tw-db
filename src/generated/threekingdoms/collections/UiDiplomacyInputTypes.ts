
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyInputTypes {
  export const KEY = new CollectionKey("ui_diplomacy_input_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly panelPath: string;
    readonly ignoreDealEvaluation: boolean;
    readonly ignoreAvailability: boolean;
    readonly showTradeInformation: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.panelPath = values["panel_path"];
      this.ignoreDealEvaluation = !!values["ignore_deal_evaluation"];
      this.ignoreAvailability = !!values["ignore_availability"];
      this.showTradeInformation = !!values["show_trade_information"];
    }
    
  }
}

export default UiDiplomacyInputTypes;
