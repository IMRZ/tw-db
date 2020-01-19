
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatLocalisations {
  export const KEY = new CollectionKey("unit_stat_localisations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly statKey: string;
    readonly onscreenName: string;
    readonly tooltipText: string;
    readonly abbreviatedName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.statKey = values["stat_key"];
      this.onscreenName = values["onscreen_name"];
      this.tooltipText = values["tooltip_text"];
      this.abbreviatedName = values["abbreviated_name"];
    }
    
  }
}

export default UnitStatLocalisations;
