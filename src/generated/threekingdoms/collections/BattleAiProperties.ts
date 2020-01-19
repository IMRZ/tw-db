
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAiProperties {
  export const KEY = new CollectionKey("battle_ai_properties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly property: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.property = values["property"];
    }
    
  }
}

export default BattleAiProperties;
