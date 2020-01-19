
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityStances {
  export const KEY = new CollectionKey("special_ability_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly splashAttack: boolean;
    readonly useShootStance: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.splashAttack = !!values["splash_attack"];
      this.useShootStance = !!values["use_shoot_stance"];
    }
    
  }
}

export default SpecialAbilityStances;
