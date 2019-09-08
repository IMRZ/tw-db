
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace Achievements {
  export const KEY = new CollectionKey("achievements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly description: string;
    readonly steamId: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.description = values["description"];
      this.steamId = values["steam_id"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default Achievements;
