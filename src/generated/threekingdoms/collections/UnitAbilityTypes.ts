
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAbilityTypes {
  export const KEY = new CollectionKey("unit_ability_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly showCursorTrail: boolean;
    readonly iconPath: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.showCursorTrail = !!values["show_cursor_trail"];
      this.iconPath = values["icon_path"];
      this.localisedDescription = values["localised_description"];
    }
    
  }
}

export default UnitAbilityTypes;
