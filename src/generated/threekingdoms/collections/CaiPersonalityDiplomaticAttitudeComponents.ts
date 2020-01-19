
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDiplomaticAttitudeComponents {
  export const KEY = new CollectionKey("cai_personality_diplomatic_attitude_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly maxFriendlyAttitude: number;
    readonly friendlyTowardsFriendMultiplier: number;
    readonly hostileTowardsFriendMultiplier: number;
    readonly maxHostileAttitude: number;
    readonly friendlyTowardsEnemyMultiplier: number;
    readonly hostileTowardsEnemyMultiplier: number;
    readonly attitudeDeadzone: number;
    readonly treatyBasedTransitiveness: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.maxFriendlyAttitude = values["max_friendly_attitude"];
      this.friendlyTowardsFriendMultiplier = values["friendly_towards_friend_multiplier"];
      this.hostileTowardsFriendMultiplier = values["hostile_towards_friend_multiplier"];
      this.maxHostileAttitude = values["max_hostile_attitude"];
      this.friendlyTowardsEnemyMultiplier = values["friendly_towards_enemy_multiplier"];
      this.hostileTowardsEnemyMultiplier = values["hostile_towards_enemy_multiplier"];
      this.attitudeDeadzone = values["attitude_deadzone"];
      this.treatyBasedTransitiveness = !!values["treaty_based_transitiveness"];
    }
    
  }
}

export default CaiPersonalityDiplomaticAttitudeComponents;
