
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { GovernmentTypes } from "./GovernmentTypes";
import { Genders } from "./Genders";

export namespace RegionsTitles {
  export const KEY = new CollectionKey("regions_titles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _government: string;
    readonly _gender: string;
    readonly title: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._government = values["government"];
      this._gender = values["gender"];
      this.title = values["title"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get government(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._government);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default RegionsTitles;
