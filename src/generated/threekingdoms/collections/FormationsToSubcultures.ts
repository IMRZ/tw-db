
import { CollectionCache, CollectionKey } from "../../../common";
import { Formations } from "./Formations";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace FormationsToSubcultures {
  export const KEY = new CollectionKey("formations_to_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _formation: string;
    readonly _subCulture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._formation = values["formation"];
      this._subCulture = values["sub_culture"];
    }
    
    get formation(): Formations.Entry | undefined {
      const collection = <Formations.Entry[]>this.collectionCache.getCollection(Formations.KEY, Formations.Entry);
      return collection.find(entry => entry.formation === this._formation);
    }
    
    get subCulture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subCulture);
    }
  }
}

export default FormationsToSubcultures;
