
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileIncendiaryEnum } from "./ProjectileIncendiaryEnum";
import { UnitCategory } from "./UnitCategory";

export namespace NavalFireJunctions {
  export const KEY = new CollectionKey("naval_fire_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incendiaryLevel: string;
    readonly _unitCategory: string;
    readonly chanceOfFire: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incendiaryLevel = values["incendiary_level"];
      this._unitCategory = values["unit_category"];
      this.chanceOfFire = values["chance_of_fire"];
    }
    
    get incendiaryLevel(): ProjectileIncendiaryEnum.Entry | undefined {
      const collection = <ProjectileIncendiaryEnum.Entry[]>this.collectionCache.getCollection(ProjectileIncendiaryEnum.KEY, ProjectileIncendiaryEnum.Entry);
      return collection.find(entry => entry.key === this._incendiaryLevel);
    }
    
    get unitCategory(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._unitCategory);
    }
  }
}

export default NavalFireJunctions;
