
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CombatPotentialsTypes {
  export const KEY = new CollectionKey("combat_potentials_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly combatPotentialTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.combatPotentialTypeKey = values["combat_potential_type_key"];
    }
    
  }
}

export default CombatPotentialsTypes;
