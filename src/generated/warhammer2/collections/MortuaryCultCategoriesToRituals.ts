
import { CollectionCache, CollectionKey } from "../../../common";
import { MortuaryCultCategories } from "./MortuaryCultCategories";
import { Rituals } from "./Rituals";

export namespace MortuaryCultCategoriesToRituals {
  export const KEY = new CollectionKey("mortuary_cult_categories_to_rituals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mortuaryCategory: string;
    readonly _ritual: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mortuaryCategory = values["mortuary_category"];
      this._ritual = values["ritual"];
    }
    
    get mortuaryCategory(): MortuaryCultCategories.Entry | undefined {
      const collection = <MortuaryCultCategories.Entry[]>this.collectionCache.getCollection(MortuaryCultCategories.KEY, MortuaryCultCategories.Entry);
      return collection.find(entry => entry.key === this._mortuaryCategory);
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default MortuaryCultCategoriesToRituals;
