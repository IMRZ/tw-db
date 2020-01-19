
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChainAvailabilitySetIds } from "./BuildingChainAvailabilitySetIds";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace BuildingChainAvailabilities {
  export const KEY = new CollectionKey("building_chain_availabilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _setId: string;
    readonly _culture: string;
    readonly _subCulture: string;
    readonly _faction: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._setId = values["set_id"];
      this._culture = values["culture"];
      this._subCulture = values["sub_culture"];
      this._faction = values["faction"];
      this._campaign = values["campaign"];
    }
    
    get setId(): BuildingChainAvailabilitySetIds.Entry | undefined {
      const collection = <BuildingChainAvailabilitySetIds.Entry[]>this.collectionCache.getCollection(BuildingChainAvailabilitySetIds.KEY, BuildingChainAvailabilitySetIds.Entry);
      return collection.find(entry => entry.id === this._setId);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subCulture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subCulture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default BuildingChainAvailabilities;
