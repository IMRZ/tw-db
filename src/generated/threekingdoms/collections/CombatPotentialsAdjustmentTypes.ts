
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CombatPotentialsAdjustmentTypes {
  export const KEY = new CollectionKey("combat_potentials_adjustment_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly combatPotentialAdjustmentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.combatPotentialAdjustmentType = values["combat_potential_adjustment_type"];
    }
    
  }
}

export default CombatPotentialsAdjustmentTypes;
