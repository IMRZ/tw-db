
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleDuelScopes {
  export const KEY = new CollectionKey("battle_duel_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly scope: string;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.scope = values["scope"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default BattleDuelScopes;
