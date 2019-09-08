
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignClanLevelInfos {
  export const KEY = new CollectionKey("campaign_clan_level_infos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly clanLevel: number;
    readonly _optionalFactionKey: string;
    readonly optionalDifficultyLevel: string;
    readonly modernisationThreshold: number;
    readonly technologyUnlockLevel: number;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.clanLevel = values["clan_level"];
      this._optionalFactionKey = values["optional_faction_key"];
      this.optionalDifficultyLevel = values["optional_difficulty_level"];
      this.modernisationThreshold = values["modernisation_threshold"];
      this.technologyUnlockLevel = values["technology_unlock_level"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get optionalFactionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._optionalFactionKey);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignClanLevelInfos;
