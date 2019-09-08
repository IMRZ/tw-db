
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { PoliticsGovernmentTypes } from "./PoliticsGovernmentTypes";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";
import { TraitInfo } from "./TraitInfo";

export namespace CultureSubculturePoliticsGovernmentTypes {
  export const KEY = new CollectionKey("culture_subculture_politics_government_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly _governmentType: string;
    readonly _faction: string;
    readonly onScreenNameGovernmentType: string;
    readonly onScreenNameFactionLeader: string;
    readonly _effectBundle: string;
    readonly isDefault: boolean;
    readonly _factionLeaderTrait: string;
    readonly onScreenNameFactionLeaderFemale: string;
    readonly _factionLeaderTraitFemale: string;
    readonly onScreenNameGovernmentActions: string;
    readonly onScreenDescrGovernmentActions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this._governmentType = values["government_type"];
      this._faction = values["faction"];
      this.onScreenNameGovernmentType = values["on_screen_name_government_type"];
      this.onScreenNameFactionLeader = values["on_screen_name_faction_leader"];
      this._effectBundle = values["effect_bundle"];
      this.isDefault = !!values["is_default"];
      this._factionLeaderTrait = values["faction_leader_trait"];
      this.onScreenNameFactionLeaderFemale = values["on_screen_name_faction_leader_female"];
      this._factionLeaderTraitFemale = values["faction_leader_trait_female"];
      this.onScreenNameGovernmentActions = values["on_screen_name_government_actions"];
      this.onScreenDescrGovernmentActions = values["on_screen_descr_government_actions"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get governmentType(): PoliticsGovernmentTypes.Entry | undefined {
      const collection = <PoliticsGovernmentTypes.Entry[]>this.collectionCache.getCollection(PoliticsGovernmentTypes.KEY, PoliticsGovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get factionLeaderTrait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._factionLeaderTrait);
    }
    
    get factionLeaderTraitFemale(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._factionLeaderTraitFemale);
    }
  }
}

export default CultureSubculturePoliticsGovernmentTypes;
