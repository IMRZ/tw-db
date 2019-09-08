
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GeneralCommandStarLevelEffects {
  export const KEY = new CollectionKey("general_command_star_level_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly commandStarLevel: number;
    readonly aliveMoraleBonus: number;
    readonly nearbyMoraleBonus: number;
    readonly meleeAttackBonus: number;
    readonly meleeDefenceBonus: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.commandStarLevel = values["command_star_level"];
      this.aliveMoraleBonus = values["alive_morale_bonus"];
      this.nearbyMoraleBonus = values["nearby_morale_bonus"];
      this.meleeAttackBonus = values["melee_attack_bonus"];
      this.meleeDefenceBonus = values["melee_defence_bonus"];
    }
    
  }
}

export default GeneralCommandStarLevelEffects;
