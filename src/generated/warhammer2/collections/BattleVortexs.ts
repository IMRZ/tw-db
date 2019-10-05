
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { CompositeSceneFiles } from "./CompositeSceneFiles";
import { BattleVortexLaunchSources } from "./BattleVortexLaunchSources";
import { BattleVortexCollisionResponses } from "./BattleVortexCollisionResponses";
import { ParticleEffects } from "./ParticleEffects";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";

export namespace BattleVortexs {
  export const KEY = new CollectionKey("battle_vortexs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly vortexKey: string;
    readonly duration: number;
    readonly damage: number;
    readonly damageAp: number;
    readonly expansionSpeed: number;
    readonly startRadius: number;
    readonly goalRadius: number;
    readonly movementSpeed: number;
    readonly moveChangeFreq: number;
    readonly changeMaxAngle: number;
    readonly _contactEffect: string;
    readonly heightOffGround: number;
    readonly infiniteHeight: boolean;
    readonly ignitionAmount: number;
    readonly isMagical: boolean;
    readonly _compositeScene: string;
    readonly detonationForce: number;
    readonly _launchSource: string;
    readonly _buildingCollision: string;
    readonly delay: number;
    readonly _launchVfx: string;
    readonly _compositeSceneBlood: string;
    readonly numVortexes: number;
    readonly affectsAllies: boolean;
    readonly launchSourceOffset: number;
    readonly _compositeSceneGroup: string;
    readonly delayBetweenVortexes: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.vortexKey = values["vortex_key"];
      this.duration = values["duration"];
      this.damage = values["damage"];
      this.damageAp = values["damage_ap"];
      this.expansionSpeed = values["expansion_speed"];
      this.startRadius = values["start_radius"];
      this.goalRadius = values["goal_radius"];
      this.movementSpeed = values["movement_speed"];
      this.moveChangeFreq = values["move_change_freq"];
      this.changeMaxAngle = values["change_max_angle"];
      this._contactEffect = values["contact_effect"];
      this.heightOffGround = values["height_off_ground"];
      this.infiniteHeight = !!values["infinite_height"];
      this.ignitionAmount = values["ignition_amount"];
      this.isMagical = !!values["is_magical"];
      this._compositeScene = values["composite_scene"];
      this.detonationForce = values["detonation_force"];
      this._launchSource = values["launch_source"];
      this._buildingCollision = values["building_collision"];
      this.delay = values["delay"];
      this._launchVfx = values["launch_vfx"];
      this._compositeSceneBlood = values["composite_scene_blood"];
      this.numVortexes = values["num_vortexes"];
      this.affectsAllies = !!values["affects_allies"];
      this.launchSourceOffset = values["launch_source_offset"];
      this._compositeSceneGroup = values["composite_scene_group"];
      this.delayBetweenVortexes = values["delay_between_vortexes"];
    }
    
    get contactEffect(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._contactEffect);
    }
    
    get compositeScene(): CompositeSceneFiles.Entry | undefined {
      const collection = <CompositeSceneFiles.Entry[]>this.collectionCache.getCollection(CompositeSceneFiles.KEY, CompositeSceneFiles.Entry);
      return collection.find(entry => entry.sceneFilepath === this._compositeScene);
    }
    
    get launchSource(): BattleVortexLaunchSources.Entry | undefined {
      const collection = <BattleVortexLaunchSources.Entry[]>this.collectionCache.getCollection(BattleVortexLaunchSources.KEY, BattleVortexLaunchSources.Entry);
      return collection.find(entry => entry.suggestedLaunchSource === this._launchSource);
    }
    
    get buildingCollision(): BattleVortexCollisionResponses.Entry | undefined {
      const collection = <BattleVortexCollisionResponses.Entry[]>this.collectionCache.getCollection(BattleVortexCollisionResponses.KEY, BattleVortexCollisionResponses.Entry);
      return collection.find(entry => entry.vortexCollisionType === this._buildingCollision);
    }
    
    get launchVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._launchVfx);
    }
    
    get compositeSceneBlood(): CompositeSceneFiles.Entry | undefined {
      const collection = <CompositeSceneFiles.Entry[]>this.collectionCache.getCollection(CompositeSceneFiles.KEY, CompositeSceneFiles.Entry);
      return collection.find(entry => entry.sceneFilepath === this._compositeSceneBlood);
    }
    
    get compositeSceneGroup(): BattleVortexCompositeSceneGroups.Entry | undefined {
      const collection = <BattleVortexCompositeSceneGroups.Entry[]>this.collectionCache.getCollection(BattleVortexCompositeSceneGroups.KEY, BattleVortexCompositeSceneGroups.Entry);
      return collection.find(entry => entry.groupId === this._compositeSceneGroup);
    }
  }
}

export default BattleVortexs;
