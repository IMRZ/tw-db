
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Campaigns } from "./Campaigns";
import { StartPosFactions } from "./StartPosFactions";
import { Governorships } from "./Governorships";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace StartPosRegions {
  export const KEY = new CollectionKey("start_pos_regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _region: string;
    readonly _campaign: string;
    readonly _owningFaction: number;
    readonly factionCapital: boolean;
    readonly basePopulation: number;
    readonly baseMaxPopulation: number;
    readonly population: number;
    readonly baseGdp: number;
    readonly roadUpgrades: number;
    readonly canals: boolean;
    readonly railways: boolean;
    readonly townWealth: number;
    readonly _governorship: string;
    readonly _culturalOriginator: string;
    readonly _rebelFaction: any;
    readonly rebelFactionName: string;
    readonly _alternativeRebelFaction: any;
    readonly settlerRebellionsEnabled: boolean;
    readonly capturePrestige: number;
    readonly longDescription: string;
    readonly developmentPoints: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._region = values["region"];
      this._campaign = values["campaign"];
      this._owningFaction = values["owning_faction"];
      this.factionCapital = !!values["faction_capital"];
      this.basePopulation = values["base_population"];
      this.baseMaxPopulation = values["base_max_population"];
      this.population = values["population"];
      this.baseGdp = values["base_gdp"];
      this.roadUpgrades = values["road_upgrades"];
      this.canals = !!values["canals"];
      this.railways = !!values["railways"];
      this.townWealth = values["town_wealth"];
      this._governorship = values["governorship"];
      this._culturalOriginator = values["cultural_originator"];
      this._rebelFaction = values["rebel_faction"];
      this.rebelFactionName = values["rebel_faction_name"];
      this._alternativeRebelFaction = values["alternative_rebel_faction"];
      this.settlerRebellionsEnabled = !!values["settler_rebellions_enabled"];
      this.capturePrestige = values["capture_prestige"];
      this.longDescription = values["long_description"];
      this.developmentPoints = values["development_points"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get owningFaction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._owningFaction);
    }
    
    get governorship(): Governorships.Entry | undefined {
      const collection = <Governorships.Entry[]>this.collectionCache.getCollection(Governorships.KEY, Governorships.Entry);
      return collection.find(entry => entry.governorship === this._governorship);
    }
    
    get culturalOriginator(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._culturalOriginator);
    }
  }
}

export default StartPosRegions;
