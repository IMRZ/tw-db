
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldCivilianBehaviours {
  export const KEY = new CollectionKey("battlefield_civilian_behaviours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly attackNearbySoldiers: boolean;
    readonly unitThreatDistance: number;
    readonly buildingDamageThreatDistance: number;
    readonly largeProjectileThreatDistance: number;
    readonly friendlyEntityHitByProjectileThreatDistance: number;
    readonly nonLocalFleeingCivilianThreatDistance: number;
    readonly chanceToWander: number;
    readonly rallyNearbyCiviliansRadius: number;
    readonly chanceToWanderFromShelter: number;
    readonly chanceToPickShelterAsWanderTarget: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.attackNearbySoldiers = !!values["attack_nearby_soldiers"];
      this.unitThreatDistance = values["unit_threat_distance"];
      this.buildingDamageThreatDistance = values["building_damage_threat_distance"];
      this.largeProjectileThreatDistance = values["large_projectile_threat_distance"];
      this.friendlyEntityHitByProjectileThreatDistance = values["friendly_entity_hit_by_projectile_threat_distance"];
      this.nonLocalFleeingCivilianThreatDistance = values["non_local_fleeing_civilian_threat_distance"];
      this.chanceToWander = values["chance_to_wander"];
      this.rallyNearbyCiviliansRadius = values["rally_nearby_civilians_radius"];
      this.chanceToWanderFromShelter = values["chance_to_wander_from_shelter"];
      this.chanceToPickShelterAsWanderTarget = values["chance_to_pick_shelter_as_wander_target"];
    }
    
  }
}

export default BattlefieldCivilianBehaviours;
