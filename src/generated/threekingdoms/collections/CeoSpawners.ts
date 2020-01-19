
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { Ceos } from "./Ceos";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";

export namespace CeoSpawners {
  export const KEY = new CollectionKey("ceo_spawners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _existsInLocation: string;
    readonly _spawnsCeo: string;
    readonly spawnThreshold: number;
    readonly minPoints: number;
    readonly maxPoints: number;
    readonly pointsChangePerTurnIfSpawingEnabled: number;
    readonly pointsChangePerTurnIfSpawingDisabled: number;
    readonly resetIfPointGainDisabled: boolean;
    readonly resetIfSpawningDisabled: boolean;
    readonly destroyIfPointGainDisabled: boolean;
    readonly destroyIfSpawningDisabled: boolean;
    readonly _providesScriptedPermissionsOnSpawn: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._existsInLocation = values["exists_in_location"];
      this._spawnsCeo = values["spawns_ceo"];
      this.spawnThreshold = values["spawn_threshold"];
      this.minPoints = values["min_points"];
      this.maxPoints = values["max_points"];
      this.pointsChangePerTurnIfSpawingEnabled = values["points_change_per_turn_if_spawing_enabled"];
      this.pointsChangePerTurnIfSpawingDisabled = values["points_change_per_turn_if_spawing_disabled"];
      this.resetIfPointGainDisabled = !!values["reset_if_point_gain_disabled"];
      this.resetIfSpawningDisabled = !!values["reset_if_spawning_disabled"];
      this.destroyIfPointGainDisabled = !!values["destroy_if_point_gain_disabled"];
      this.destroyIfSpawningDisabled = !!values["destroy_if_spawning_disabled"];
      this._providesScriptedPermissionsOnSpawn = values["provides_scripted_permissions_on_spawn"];
    }
    
    get existsInLocation(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._existsInLocation);
    }
    
    get spawnsCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._spawnsCeo);
    }
    
    get providesScriptedPermissionsOnSpawn(): CeoScriptedPermissions.Entry | undefined {
      const collection = <CeoScriptedPermissions.Entry[]>this.collectionCache.getCollection(CeoScriptedPermissions.KEY, CeoScriptedPermissions.Entry);
      return collection.find(entry => entry.key === this._providesScriptedPermissionsOnSpawn);
    }
  }
}

export default CeoSpawners;
