
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";

export namespace FactionCivilWarSetups {
  export const KEY = new CollectionKey("faction_civil_war_setups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _primaryFaction: string;
    readonly _secondaryFaction: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._primaryFaction = values["primary_faction"];
      this._secondaryFaction = values["secondary_faction"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get primaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._primaryFaction);
    }
    
    get secondaryFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._secondaryFaction);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default FactionCivilWarSetups;
