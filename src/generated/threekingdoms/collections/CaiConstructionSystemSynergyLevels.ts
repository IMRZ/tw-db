
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiConstructionSystemSynergyLevels {
  export const KEY = new CollectionKey("cai_construction_system_synergy_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly relativeEffect: number;
    readonly absoluteEffect: number;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.relativeEffect = values["relative_effect"];
      this.absoluteEffect = values["absolute_effect"];
      this.priority = values["priority"];
    }
    
  }
}

export default CaiConstructionSystemSynergyLevels;
