
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { EffectBundles } from "./EffectBundles";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { MilitaryForceTypes } from "./MilitaryForceTypes";

export namespace CampaignStanceEffectsJunctions {
  export const KEY = new CollectionKey("campaign_stance_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly _effectBundle: string;
    readonly _culture: string;
    readonly _subculture: string;
    readonly _faction: string;
    readonly _forceType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this._effectBundle = values["effect_bundle"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
      this._faction = values["faction"];
      this._forceType = values["force_type"];
    }
    
    get stance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get forceType(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._forceType);
    }
  }
}

export default CampaignStanceEffectsJunctions;
