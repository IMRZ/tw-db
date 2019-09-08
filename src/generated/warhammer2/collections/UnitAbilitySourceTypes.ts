
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAbilitySourceTypes {
  export const KEY = new CollectionKey("unit_ability_source_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly tooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.tooltip = values["tooltip"];
    }
    
  }
}

export default UnitAbilitySourceTypes;
