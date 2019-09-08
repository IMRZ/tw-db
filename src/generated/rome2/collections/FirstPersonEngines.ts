
import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";

export namespace FirstPersonEngines {
  export const KEY = new CollectionKey("first_person_engines");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly reloadTime: number;
    readonly autoTarget: boolean;
    readonly cameraOffsetX: number;
    readonly cameraOffsetY: number;
    readonly cameraOffsetZ: number;
    readonly nearClippingPlane: number;
    readonly trackProjectileDistance: number;
    readonly halfAccuracyArc: number;
    readonly halfHorizontalFireArc: number;
    readonly halfVerticalFireArcElevation: number;
    readonly turnDelay: number;
    readonly halfVerticalFireArcDeclination: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.reloadTime = values["reload_time"];
      this.autoTarget = !!values["auto_target"];
      this.cameraOffsetX = values["camera_offset_x"];
      this.cameraOffsetY = values["camera_offset_y"];
      this.cameraOffsetZ = values["camera_offset_z"];
      this.nearClippingPlane = values["near_clipping_plane"];
      this.trackProjectileDistance = values["track_projectile_distance"];
      this.halfAccuracyArc = values["half_accuracy_arc"];
      this.halfHorizontalFireArc = values["half_horizontal_fire_arc"];
      this.halfVerticalFireArcElevation = values["half_vertical_fire_arc_elevation"];
      this.turnDelay = values["turn_delay"];
      this.halfVerticalFireArcDeclination = values["half_vertical_fire_arc_declination"];
    }
    
    get key(): GunTypesEnum.Entry | undefined {
      const collection = <GunTypesEnum.Entry[]>this.collectionCache.getCollection(GunTypesEnum.KEY, GunTypesEnum.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default FirstPersonEngines;
