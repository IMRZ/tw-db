
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingLevelsSettlementUiDisplays {
  export const KEY = new CollectionKey("building_levels_settlement_ui_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly iconPath: string;
    readonly tooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.iconPath = values["icon_path"];
      this.tooltip = values["tooltip"];
    }
    
  }
}

export default BuildingLevelsSettlementUiDisplays;
