
import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { Genders } from "./Genders";

export namespace NamesTitles {
  export const KEY = new CollectionKey("names_titles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _nameGroup: number;
    readonly title: string;
    readonly _gender: string;
    readonly rank: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._nameGroup = values["name_group"];
      this.title = values["title"];
      this._gender = values["gender"];
      this.rank = values["rank"];
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default NamesTitles;
