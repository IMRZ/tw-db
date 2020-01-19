
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace FactionPotentialDifficultyOverrides {
  export const KEY = new CollectionKey("faction_potential_difficulty_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _factionDifficultyLevel: string;
    readonly _campaignKey: string;
    readonly _playerFaction: string;
    readonly _playerSubculture: string;
    readonly factionPotentialBonus: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._factionDifficultyLevel = values["faction_difficulty_level"];
      this._campaignKey = values["campaign_key"];
      this._playerFaction = values["player_faction"];
      this._playerSubculture = values["player_subculture"];
      this.factionPotentialBonus = values["faction_potential_bonus"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get factionDifficultyLevel(): PlayerGameDifficultyTypes.Entry | undefined {
      const collection = <PlayerGameDifficultyTypes.Entry[]>this.collectionCache.getCollection(PlayerGameDifficultyTypes.KEY, PlayerGameDifficultyTypes.Entry);
      return collection.find(entry => entry.difficultyType === this._factionDifficultyLevel);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get playerFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._playerFaction);
    }
    
    get playerSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._playerSubculture);
    }
  }
}

export default FactionPotentialDifficultyOverrides;
