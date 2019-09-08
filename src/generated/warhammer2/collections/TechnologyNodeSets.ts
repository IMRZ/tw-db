
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { TechnologyCategories } from "./TechnologyCategories";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TexcExpansions } from "./TexcExpansions";

export namespace TechnologyNodeSets {
  export const KEY = new CollectionKey("technology_node_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly _technologyCategory: string;
    readonly _culture: string;
    readonly _subculture: string;
    readonly localisedName: string;
    readonly tooltipString: string;
    readonly encyclopaediaString: string;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this._technologyCategory = values["technology_category"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
      this.localisedName = values["localised_name"];
      this.tooltipString = values["tooltip_string"];
      this.encyclopaediaString = values["encyclopaedia_string"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get technologyCategory(): TechnologyCategories.Entry | undefined {
      const collection = <TechnologyCategories.Entry[]>this.collectionCache.getCollection(TechnologyCategories.KEY, TechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._technologyCategory);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default TechnologyNodeSets;
