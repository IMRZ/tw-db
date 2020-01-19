
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { CaiPersonalityQuirks } from "./CaiPersonalityQuirks";

export namespace CaiPersonalityQuirkTraitJunctions {
  export const KEY = new CollectionKey("cai_personality_quirk_trait_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _traitId: string;
    readonly _quirkId: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._traitId = values["trait_id"];
      this._quirkId = values["quirk_id"];
      this.weight = values["weight"];
    }
    
    get traitId(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._traitId);
    }
    
    get quirkId(): CaiPersonalityQuirks.Entry | undefined {
      const collection = <CaiPersonalityQuirks.Entry[]>this.collectionCache.getCollection(CaiPersonalityQuirks.KEY, CaiPersonalityQuirks.Entry);
      return collection.find(entry => entry.id === this._quirkId);
    }
  }
}

export default CaiPersonalityQuirkTraitJunctions;
