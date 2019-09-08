
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { ModelsBuilding } from "./ModelsBuilding";
import { AudioMaterials } from "./AudioMaterials";
import { MissileWeapons } from "./MissileWeapons";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";
import { GroundTypes } from "./GroundTypes";

export namespace BattlefieldBuildings {
  export const KEY = new CollectionKey("battlefield_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly _model: string;
    readonly _audioMaterial: string;
    readonly hitPoints: string;
    readonly _gunType: string;
    readonly _onscreenName: string;
    readonly ignitionThreshold: number;
    readonly radarIcon: string;
    readonly visibleInPublicTed: boolean;
    readonly fortwallPenetrationChance: number;
    readonly collision3D: boolean;
    readonly destructThresholds: string;
    readonly joiner: boolean;
    readonly auxiliary: boolean;
    readonly burnRate: number;
    readonly heightMapMesh: boolean;
    readonly _groundType: string;
    readonly canBurn: boolean;
    readonly audioCountAsUrban: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._model = values["model"];
      this._audioMaterial = values["audio_material"];
      this.hitPoints = values["hit_points"];
      this._gunType = values["gun_type"];
      this._onscreenName = values["onscreen_name"];
      this.ignitionThreshold = values["ignition_threshold"];
      this.radarIcon = values["radar_icon"];
      this.visibleInPublicTed = !!values["visible_in_public_ted"];
      this.fortwallPenetrationChance = values["fortwall_penetration_chance"];
      this.collision3D = !!values["collision_3d"];
      this.destructThresholds = values["destruct_thresholds"];
      this.joiner = !!values["joiner"];
      this.auxiliary = !!values["auxiliary"];
      this.burnRate = values["burn_rate"];
      this.heightMapMesh = !!values["height_map_mesh"];
      this._groundType = values["ground_type"];
      this.canBurn = !!values["can_burn"];
      this.audioCountAsUrban = !!values["audio_count_as_urban"];
    }
    
    get category(): BattlefieldBuildingCategories.Entry | undefined {
      const collection = <BattlefieldBuildingCategories.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingCategories.KEY, BattlefieldBuildingCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get model(): ModelsBuilding.Entry | undefined {
      const collection = <ModelsBuilding.Entry[]>this.collectionCache.getCollection(ModelsBuilding.KEY, ModelsBuilding.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get audioMaterial(): AudioMaterials.Entry | undefined {
      const collection = <AudioMaterials.Entry[]>this.collectionCache.getCollection(AudioMaterials.KEY, AudioMaterials.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
    
    get gunType(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._gunType);
    }
    
    get onscreenName(): BattlefieldBuildingsNames.Entry | undefined {
      const collection = <BattlefieldBuildingsNames.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingsNames.KEY, BattlefieldBuildingsNames.Entry);
      return collection.find(entry => entry.key === this._onscreenName);
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
  }
}

export default BattlefieldBuildings;
