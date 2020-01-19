
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldBuildingsNames {
  export const KEY = new CollectionKey("battlefield_buildings_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly onscreenName: string;
    readonly key: string;
    readonly globalEffectsDescription: string;
    readonly localEffectsDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.onscreenName = values["onscreen_name"];
      this.key = values["key"];
      this.globalEffectsDescription = values["global_effects_description"];
      this.localEffectsDescription = values["local_effects_description"];
    }
    
  }
}

export default BattlefieldBuildingsNames;
