
import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsDeployables } from "./ModelsDeployables";
import { DeployablesCategories } from "./DeployablesCategories";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { ParticleEffects } from "./ParticleEffects";
import { AudioMaterials } from "./AudioMaterials";
import { GroundTypes } from "./GroundTypes";
import { BattlefieldBuildings } from "./BattlefieldBuildings";

export namespace Deployables {
  export const KEY = new CollectionKey("deployables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly _model: string;
    readonly _model2: string;
    readonly number: number;
    readonly spacingX: number;
    readonly spacingY: number;
    readonly minRows: number;
    readonly minColumns: number;
    readonly randomOffset: number;
    readonly hitpoints: number;
    readonly killChance: number;
    readonly value: number;
    readonly iconName: string;
    readonly description: string;
    readonly tooltip: string;
    readonly recruitmentCap: number;
    readonly maxRows: number;
    readonly ignitionThreshold: number;
    readonly _category: string;
    readonly _explosion: string;
    readonly _underConstructionEffect: string;
    readonly _audioMaterial: string;
    readonly _groundTypeReplacement: string;
    readonly groundTypeReplacementRadiusMod: number;
    readonly _battlefieldBuilding: string;
    readonly captureRadius: number;
    readonly fireUpdateFrequency: number;
    readonly minimumPlacementDistance: number;
    readonly hidingScalar: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this._model = values["model"];
      this._model2 = values["model_2"];
      this.number = values["number"];
      this.spacingX = values["spacing_x"];
      this.spacingY = values["spacing_y"];
      this.minRows = values["min_rows"];
      this.minColumns = values["min_columns"];
      this.randomOffset = values["random_offset"];
      this.hitpoints = values["hitpoints"];
      this.killChance = values["kill_chance"];
      this.value = values["value"];
      this.iconName = values["icon_name"];
      this.description = values["description"];
      this.tooltip = values["tooltip"];
      this.recruitmentCap = values["recruitment_cap"];
      this.maxRows = values["max_rows"];
      this.ignitionThreshold = values["ignition_threshold"];
      this._category = values["category"];
      this._explosion = values["explosion"];
      this._underConstructionEffect = values["under_construction_effect"];
      this._audioMaterial = values["audio_material"];
      this._groundTypeReplacement = values["ground_type_replacement"];
      this.groundTypeReplacementRadiusMod = values["ground_type_replacement_radius_mod"];
      this._battlefieldBuilding = values["battlefield_building"];
      this.captureRadius = values["capture_radius"];
      this.fireUpdateFrequency = values["fire_update_frequency"];
      this.minimumPlacementDistance = values["minimum_placement_distance"];
      this.hidingScalar = values["hiding_scalar"];
    }
    
    get model(): ModelsDeployables.Entry | undefined {
      const collection = <ModelsDeployables.Entry[]>this.collectionCache.getCollection(ModelsDeployables.KEY, ModelsDeployables.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get model2(): ModelsDeployables.Entry | undefined {
      const collection = <ModelsDeployables.Entry[]>this.collectionCache.getCollection(ModelsDeployables.KEY, ModelsDeployables.Entry);
      return collection.find(entry => entry.key === this._model2);
    }
    
    get category(): DeployablesCategories.Entry | undefined {
      const collection = <DeployablesCategories.Entry[]>this.collectionCache.getCollection(DeployablesCategories.KEY, DeployablesCategories.Entry);
      return collection.find(entry => entry.deployableCategory === this._category);
    }
    
    get explosion(): ProjectilesExplosions.Entry | undefined {
      const collection = <ProjectilesExplosions.Entry[]>this.collectionCache.getCollection(ProjectilesExplosions.KEY, ProjectilesExplosions.Entry);
      return collection.find(entry => entry.key === this._explosion);
    }
    
    get underConstructionEffect(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._underConstructionEffect);
    }
    
    get audioMaterial(): AudioMaterials.Entry | undefined {
      const collection = <AudioMaterials.Entry[]>this.collectionCache.getCollection(AudioMaterials.KEY, AudioMaterials.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
    
    get groundTypeReplacement(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundTypeReplacement);
    }
    
    get battlefieldBuilding(): BattlefieldBuildings.Entry | undefined {
      const collection = <BattlefieldBuildings.Entry[]>this.collectionCache.getCollection(BattlefieldBuildings.KEY, BattlefieldBuildings.Entry);
      return collection.find(entry => entry.key === this._battlefieldBuilding);
    }
  }
}

export default Deployables;
