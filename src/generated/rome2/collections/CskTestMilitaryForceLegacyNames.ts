
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CskTestMilitaryForceLegacyNames {
  export const KEY = new CollectionKey("csk_test_military_force_legacy_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _subculture: any;
    readonly localisedName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._subculture = values["subculture"];
      this.localisedName = values["localised_name"];
    }
    
  }
}

export default CskTestMilitaryForceLegacyNames;
