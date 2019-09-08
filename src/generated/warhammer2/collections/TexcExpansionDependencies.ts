
import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";

export namespace TexcExpansionDependencies {
  export const KEY = new CollectionKey("texc_expansion_dependencies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _expansion: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._expansion = values["expansion"];
      this._parent = values["parent"];
    }
    
    get expansion(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._expansion);
    }
    
    get parent(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._parent);
    }
  }
}

export default TexcExpansionDependencies;
