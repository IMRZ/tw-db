
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace CdirMilitaryGeneratorTemplates {
  export const KEY = new CollectionKey("cdir_military_generator_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default CdirMilitaryGeneratorTemplates;
