
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAbilitiesAdditionalUiEffects {
  export const KEY = new CollectionKey("unit_abilities_additional_ui_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedText: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedText = values["localised_text"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default UnitAbilitiesAdditionalUiEffects;
