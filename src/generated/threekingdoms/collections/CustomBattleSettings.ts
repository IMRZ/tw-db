
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CustomBattleSettings {
  export const KEY = new CollectionKey("custom_battle_settings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.value = values["value"];
    }
    
  }
}

export default CustomBattleSettings;
