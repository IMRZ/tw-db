
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace NamesGroups {
  export const KEY = new CollectionKey("names_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly description: string;
    readonly key: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this.description = values["Description"];
      this.key = values["key"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default NamesGroups;
