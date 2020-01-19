
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GameModes {
  export const KEY = new CollectionKey("game_modes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly desciption: string;
    readonly localisedTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.desciption = values["desciption"];
      this.localisedTitle = values["localised_title"];
    }
    
  }
}

export default GameModes;
