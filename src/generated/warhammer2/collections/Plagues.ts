
import { CollectionCache, CollectionKey } from "../../../common";
import { PlagueTypes } from "./PlagueTypes";

export namespace Plagues {
  export const KEY = new CollectionKey("plagues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly grade: number;
    readonly minimumSqualor: number;
    readonly infectivity: number;
    readonly lifetime: number;
    readonly _plagueType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.grade = values["grade"];
      this.minimumSqualor = values["minimum_squalor"];
      this.infectivity = values["infectivity"];
      this.lifetime = values["lifetime"];
      this._plagueType = values["plague_type"];
    }
    
    get plagueType(): PlagueTypes.Entry | undefined {
      const collection = <PlagueTypes.Entry[]>this.collectionCache.getCollection(PlagueTypes.KEY, PlagueTypes.Entry);
      return collection.find(entry => entry.id === this._plagueType);
    }
  }
}

export default Plagues;
