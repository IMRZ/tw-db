
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CustomBattleSettlementBuildingGroups {
  export const KEY = new CollectionKey("custom_battle_settlement_building_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default CustomBattleSettlementBuildingGroups;
