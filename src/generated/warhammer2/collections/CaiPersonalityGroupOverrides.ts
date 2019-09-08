
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";

export namespace CaiPersonalityGroupOverrides {
  export const KEY = new CollectionKey("cai_personality_group_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly difficultyHandicap: number;
    readonly _campaignKey: string;
    readonly _personalityGroup: string;
    readonly _playerFaction: string;
    readonly _playerSubculture: string;
    readonly _playerCulture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this.difficultyHandicap = values["difficulty_handicap"];
      this._campaignKey = values["campaign_key"];
      this._personalityGroup = values["personality_group"];
      this._playerFaction = values["player_faction"];
      this._playerSubculture = values["player_subculture"];
      this._playerCulture = values["player_culture"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get personalityGroup(): CaiPersonalityGroups.Entry | undefined {
      const collection = <CaiPersonalityGroups.Entry[]>this.collectionCache.getCollection(CaiPersonalityGroups.KEY, CaiPersonalityGroups.Entry);
      return collection.find(entry => entry.key === this._personalityGroup);
    }
    
    get playerFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._playerFaction);
    }
    
    get playerSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._playerSubculture);
    }
    
    get playerCulture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._playerCulture);
    }
  }
}

export default CaiPersonalityGroupOverrides;
