
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotesCategories } from "./LoadingScreenQuotesCategories";
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
    readonly _category: string;
    readonly _gameExpansionKey: string;
    readonly maxDisplays: number;
    readonly weighting: number;
    readonly firstShownWeighting: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.image = values["image"];
      this.bulletpoints = values["bulletpoints"];
      this.description = values["description"];
      this._category = values["category"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.maxDisplays = values["max_displays"];
      this.weighting = values["weighting"];
      this.firstShownWeighting = values["first_shown_weighting"];
    }
    
    get category(): LoadingScreenQuotesCategories.Entry | undefined {
      const collection = <LoadingScreenQuotesCategories.Entry[]>this.collectionCache.getCollection(LoadingScreenQuotesCategories.KEY, LoadingScreenQuotesCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default LoadingScreenQuotes;
