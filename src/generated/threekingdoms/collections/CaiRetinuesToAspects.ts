
import { CollectionCache, CollectionKey } from "../../../common";
import { Retinues } from "./Retinues";
import { CaiAspects } from "./CaiAspects";

export namespace CaiRetinuesToAspects {
  export const KEY = new CollectionKey("cai_retinues_to_aspects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _retinue: string;
    readonly _aspect: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._retinue = values["retinue"];
      this._aspect = values["aspect"];
      this.weight = values["weight"];
    }
    
    get retinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._retinue);
    }
    
    get aspect(): CaiAspects.Entry | undefined {
      const collection = <CaiAspects.Entry[]>this.collectionCache.getCollection(CaiAspects.KEY, CaiAspects.Entry);
      return collection.find(entry => entry.aspect === this._aspect);
    }
  }
}

export default CaiRetinuesToAspects;
