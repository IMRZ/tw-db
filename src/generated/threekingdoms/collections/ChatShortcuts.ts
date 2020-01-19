
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ChatShortcuts {
  export const KEY = new CollectionKey("chat_shortcuts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;
    readonly _gameArea: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
      this._gameArea = values["game_area"];
    }
    
  }
}

export default ChatShortcuts;
