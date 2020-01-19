
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace LoadingScreenQuotes {
  export const KEY = new CollectionKey("loading_screen_quotes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly image: string;
    readonly bulletpoints: string;
    readonly description: string;
    readonly category: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.image = values["image"];
      this.bulletpoints = values["bulletpoints"];
      this.description = values["description"];
      this.category = values["category"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default LoadingScreenQuotes;
