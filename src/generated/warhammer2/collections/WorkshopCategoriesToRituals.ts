
import { CollectionCache, CollectionKey } from "../../../common";
import { WorkshopCategories } from "./WorkshopCategories";
import { Rituals } from "./Rituals";

export namespace WorkshopCategoriesToRituals {
  export const KEY = new CollectionKey("workshop_categories_to_rituals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly _ritual: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this._ritual = values["ritual"];
      this.order = values["order"];
    }
    
    get category(): WorkshopCategories.Entry | undefined {
      const collection = <WorkshopCategories.Entry[]>this.collectionCache.getCollection(WorkshopCategories.KEY, WorkshopCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default WorkshopCategoriesToRituals;
