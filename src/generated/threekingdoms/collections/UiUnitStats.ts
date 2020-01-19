
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitStatLocalisations } from "./UnitStatLocalisations";

export namespace UiUnitStats {
  export const KEY = new CollectionKey("ui_unit_stats");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly maxValue: number;
    readonly campaignOnly: boolean;
    readonly sortOrder: number;
    readonly _localisation: string;
    readonly icon: string;
    readonly ceoMaxValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.maxValue = values["max_value"];
      this.campaignOnly = !!values["campaign_only"];
      this.sortOrder = values["sort_order"];
      this._localisation = values["localisation"];
      this.icon = values["icon"];
      this.ceoMaxValue = values["ceo_max_value"];
    }
    
    get localisation(): UnitStatLocalisations.Entry | undefined {
      const collection = <UnitStatLocalisations.Entry[]>this.collectionCache.getCollection(UnitStatLocalisations.KEY, UnitStatLocalisations.Entry);
      return collection.find(entry => entry.statKey === this._localisation);
    }
  }
}

export default UiUnitStats;
