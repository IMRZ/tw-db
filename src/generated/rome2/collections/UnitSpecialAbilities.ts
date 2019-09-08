
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { Projectiles } from "./Projectiles";
import { SpecialAbilitiesSpecificBehaviourTypes } from "./SpecialAbilitiesSpecificBehaviourTypes";

export namespace UnitSpecialAbilities {
  export const KEY = new CollectionKey("unit_special_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly numUses: number;
    readonly activeTime: number;
    readonly rechargeTime: number;
    readonly initialRecharge: number;
    readonly windUpTime: number;
    readonly passive: boolean;
    readonly effectRange: number;
    readonly affectSelf: boolean;
    readonly numEffectedFriendlyUnits: number;
    readonly numEffectedEnemyUnits: number;
    readonly updateTargetsEveryFrame: boolean;
    readonly _activatedProjectile: string;
    readonly canAutotrigger: boolean;
    readonly targetFriends: boolean;
    readonly targetEnemies: boolean;
    readonly targetGround: boolean;
    readonly targetInterceptRange: number;
    readonly _assumeSpecificBehaviour: string;
    readonly clearCurrentOrder: boolean;
    readonly uniqueId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.numUses = values["num_uses"];
      this.activeTime = values["active_time"];
      this.rechargeTime = values["recharge_time"];
      this.initialRecharge = values["initial_recharge"];
      this.windUpTime = values["wind_up_time"];
      this.passive = !!values["passive"];
      this.effectRange = values["effect_range"];
      this.affectSelf = !!values["affect_self"];
      this.numEffectedFriendlyUnits = values["num_effected_friendly_units"];
      this.numEffectedEnemyUnits = values["num_effected_enemy_units"];
      this.updateTargetsEveryFrame = !!values["update_targets_every_frame"];
      this._activatedProjectile = values["activated_projectile"];
      this.canAutotrigger = !!values["can_autotrigger"];
      this.targetFriends = !!values["target_friends"];
      this.targetEnemies = !!values["target_enemies"];
      this.targetGround = !!values["target_ground"];
      this.targetInterceptRange = values["target_intercept_range"];
      this._assumeSpecificBehaviour = values["assume_specific_behaviour"];
      this.clearCurrentOrder = !!values["clear_current_order"];
      this.uniqueId = values["unique_id"];
    }
    
    get key(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get activatedProjectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._activatedProjectile);
    }
    
    get assumeSpecificBehaviour(): SpecialAbilitiesSpecificBehaviourTypes.Entry | undefined {
      const collection = <SpecialAbilitiesSpecificBehaviourTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilitiesSpecificBehaviourTypes.KEY, SpecialAbilitiesSpecificBehaviourTypes.Entry);
      return collection.find(entry => entry.key === this._assumeSpecificBehaviour);
    }
  }
}

export default UnitSpecialAbilities;
