
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiInfoRitualTargetCriterias {
  export const KEY = new CollectionKey("ui_info_ritual_target_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly icon: string;
    readonly localisedText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.icon = values["icon"];
      this.localisedText = values["localised_text"];
    }
    
  }
}

export default UiInfoRitualTargetCriterias;
