
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileFirstPersonParams {
  export const KEY = new CollectionKey("projectile_first_person_params");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly invertPitchControl: boolean;
    readonly mouseSensitivity: number;
    readonly angularVelocityDecay: number;
    readonly gravity: number;
    readonly launchElevation: number;
    readonly launchSpeed: number;
    readonly liftCoefficent: number;
    readonly tailCoefficent: number;
    readonly dragCoefficent: number;
    readonly cameraYOffset: number;
    readonly cameraZOffset: number;
    readonly impactViewTime: number;
    readonly impactViewElevation: number;
    readonly impactViewDistance: number;
    readonly yawControl: boolean;
    readonly yawCoefficient: number;
    readonly useReloadStage: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.invertPitchControl = !!values["invert_pitch_control"];
      this.mouseSensitivity = values["mouse_sensitivity"];
      this.angularVelocityDecay = values["angular_velocity_decay"];
      this.gravity = values["gravity"];
      this.launchElevation = values["launch_elevation"];
      this.launchSpeed = values["launch_speed"];
      this.liftCoefficent = values["lift_coefficent"];
      this.tailCoefficent = values["tail_coefficent"];
      this.dragCoefficent = values["drag_coefficent"];
      this.cameraYOffset = values["camera_y_offset"];
      this.cameraZOffset = values["camera_z_offset"];
      this.impactViewTime = values["impact_view_time"];
      this.impactViewElevation = values["impact_view_elevation"];
      this.impactViewDistance = values["impact_view_distance"];
      this.yawControl = !!values["yaw_control"];
      this.yawCoefficient = values["yaw_coefficient"];
      this.useReloadStage = !!values["use_reload_stage"];
    }
    
  }
}

export default ProjectileFirstPersonParams;
