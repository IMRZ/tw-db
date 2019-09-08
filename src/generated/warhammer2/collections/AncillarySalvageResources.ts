
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { ResourceCosts } from "./ResourceCosts";

export namespace AncillarySalvageResources {
  export const KEY = new CollectionKey("ancillary_salvage_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly minUniquenessScore: number;
    readonly _salvageResources: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this.minUniquenessScore = values["min_uniqueness_score"];
      this._salvageResources = values["salvage_resources"];
    }
    
    get category(): AncillariesCategories.Entry | undefined {
      const collection = <AncillariesCategories.Entry[]>this.collectionCache.getCollection(AncillariesCategories.KEY, AncillariesCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get salvageResources(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._salvageResources);
    }
  }
}

export default AncillarySalvageResources;
