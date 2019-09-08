
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TraitInfo } from "./TraitInfo";
import { Factions } from "./Factions";

export namespace CursusHonorumTraitJunctions {
  export const KEY = new CollectionKey("cursus_honorum_trait_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subcultureKey: string;
    readonly _traitInfoKey: string;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subcultureKey = values["subculture_key"];
      this._traitInfoKey = values["trait_info_key"];
      this._factionKey = values["faction_key"];
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
    
    get traitInfoKey(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._traitInfoKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default CursusHonorumTraitJunctions;
