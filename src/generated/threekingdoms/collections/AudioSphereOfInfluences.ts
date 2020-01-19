
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioSphereOfInfluenceGroups } from "./AudioSphereOfInfluenceGroups";

export namespace AudioSphereOfInfluences {
  export const KEY = new CollectionKey("audio_sphere_of_influences");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _group: string;
    readonly minCameraDistance: number;
    readonly maxCameraDistance: number;
    readonly minInfluenceDistance: number;
    readonly maxInfluenceDistance: number;
    readonly maxInfluence: number;
    readonly maxVisualAttenuation: number;
    readonly priority: number;
    readonly isReversed: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._group = values["group"];
      this.minCameraDistance = values["min_camera_distance"];
      this.maxCameraDistance = values["max_camera_distance"];
      this.minInfluenceDistance = values["min_influence_distance"];
      this.maxInfluenceDistance = values["max_influence_distance"];
      this.maxInfluence = values["max_influence"];
      this.maxVisualAttenuation = values["max_visual_attenuation"];
      this.priority = values["priority"];
      this.isReversed = !!values["is_reversed"];
    }
    
    get group(): AudioSphereOfInfluenceGroups.Entry | undefined {
      const collection = <AudioSphereOfInfluenceGroups.Entry[]>this.collectionCache.getCollection(AudioSphereOfInfluenceGroups.KEY, AudioSphereOfInfluenceGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default AudioSphereOfInfluences;
