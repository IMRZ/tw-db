
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { WarscapeRigid } from "./WarscapeRigid";

export namespace SmallVegetationClimatesJct {
  export const KEY = new CollectionKey("small_vegetation_climates_jct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _climate: string;
    readonly _rigidName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._climate = values["climate"];
      this._rigidName = values["rigid_name"];
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
    
    get rigidName(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._rigidName);
    }
  }
}

export default SmallVegetationClimatesJct;
