
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MpForceGenCompositions {
  export const KEY = new CollectionKey("mp_force_gen_compositions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly generalPct: number;
    readonly unitsPct: number;
    readonly upgradePct: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.generalPct = values["general_pct"];
      this.unitsPct = values["units_pct"];
      this.upgradePct = values["upgrade_pct"];
    }
    
  }
}

export default MpForceGenCompositions;
