
import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { NameTypes } from "./NameTypes";
import { Genders } from "./Genders";

export namespace Names {
  export const KEY = new CollectionKey("names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _namesGroup: number;
    readonly name: string;
    readonly _type: string;
    readonly _gender: string;
    readonly frequency: number;
    readonly nobility: boolean;
    readonly id: number;
    readonly altName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._namesGroup = values["names_group"];
      this.name = values["name"];
      this._type = values["type"];
      this._gender = values["gender"];
      this.frequency = values["frequency"];
      this.nobility = !!values["nobility"];
      this.id = values["id"];
      this.altName = values["alt_name"];
    }
    
    get namesGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._namesGroup);
    }
    
    get type(): NameTypes.Entry | undefined {
      const collection = <NameTypes.Entry[]>this.collectionCache.getCollection(NameTypes.KEY, NameTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default Names;
