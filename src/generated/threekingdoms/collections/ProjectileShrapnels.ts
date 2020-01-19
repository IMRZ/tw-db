
import { CollectionCache, CollectionKey } from "../../../common";
import { ShrapnelLaunchTypeEnums } from "./ShrapnelLaunchTypeEnums";
import { Projectiles } from "./Projectiles";

export namespace ProjectileShrapnels {
  export const KEY = new CollectionKey("projectile_shrapnels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _launchType: string;
    readonly amount: number;
    readonly sectorAngle: number;
    readonly _projectile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._launchType = values["launch_type"];
      this.amount = values["amount"];
      this.sectorAngle = values["sector_angle"];
      this._projectile = values["projectile"];
    }
    
    get launchType(): ShrapnelLaunchTypeEnums.Entry | undefined {
      const collection = <ShrapnelLaunchTypeEnums.Entry[]>this.collectionCache.getCollection(ShrapnelLaunchTypeEnums.KEY, ShrapnelLaunchTypeEnums.Entry);
      return collection.find(entry => entry.key === this._launchType);
    }
    
    get projectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectile);
    }
  }
}

export default ProjectileShrapnels;
