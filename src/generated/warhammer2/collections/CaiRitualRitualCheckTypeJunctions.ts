
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { CaiRitualCheckTypes } from "./CaiRitualCheckTypes";

export namespace CaiRitualRitualCheckTypeJunctions {
  export const KEY = new CollectionKey("cai_ritual_ritual_check_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly _ritualCheckType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this._ritualCheckType = values["ritual_check_type"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
    
    get ritualCheckType(): CaiRitualCheckTypes.Entry | undefined {
      const collection = <CaiRitualCheckTypes.Entry[]>this.collectionCache.getCollection(CaiRitualCheckTypes.KEY, CaiRitualCheckTypes.Entry);
      return collection.find(entry => entry.key === this._ritualCheckType);
    }
  }
}

export default CaiRitualRitualCheckTypeJunctions;
