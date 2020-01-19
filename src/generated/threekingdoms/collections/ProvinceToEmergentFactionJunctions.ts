
import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace ProvinceToEmergentFactionJunctions {
  export const KEY = new CollectionKey("province_to_emergent_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _province: string;
    readonly _factionRecord: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._province = values["province"];
      this._factionRecord = values["faction_record"];
      this._campaign = values["campaign"];
    }
    
    get province(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province);
    }
    
    get factionRecord(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionRecord);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default ProvinceToEmergentFactionJunctions;
