
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AiUsageGroups {
  export const KEY = new CollectionKey("ai_usage_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly melee: boolean;
    readonly rangedIndirect: boolean;
    readonly fast: boolean;
    readonly support: boolean;
    readonly rangedDirect: boolean;
    readonly flanker: boolean;
    readonly flying: boolean;
    readonly highValue: boolean;
    readonly gateCrusher: boolean;
    readonly bomber: boolean;
    readonly shock: boolean;
    readonly useSkirmish: boolean;
    readonly harasser: boolean;
    readonly stalker: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.melee = !!values["melee"];
      this.rangedIndirect = !!values["ranged_indirect"];
      this.fast = !!values["fast"];
      this.support = !!values["support"];
      this.rangedDirect = !!values["ranged_direct"];
      this.flanker = !!values["flanker"];
      this.flying = !!values["flying"];
      this.highValue = !!values["high_value"];
      this.gateCrusher = !!values["gate_crusher"];
      this.bomber = !!values["bomber"];
      this.shock = !!values["shock"];
      this.useSkirmish = !!values["use_skirmish"];
      this.harasser = !!values["harasser"];
      this.stalker = !!values["stalker"];
    }
    
  }
}

export default AiUsageGroups;
