
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlePersonalities } from "./BattlePersonalities";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";

export namespace LandUnitsOfficers {
  export const KEY = new CollectionKey("land_units_officers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _officer1: string;
    readonly _officer2: string;
    readonly _standardBearer1: string;
    readonly _standardBearer2: string;
    readonly _musician1: string;
    readonly _musician2: string;
    readonly _personalityLocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._officer1 = values["officer_1"];
      this._officer2 = values["officer_2"];
      this._standardBearer1 = values["standard_bearer_1"];
      this._standardBearer2 = values["standard_bearer_2"];
      this._musician1 = values["musician_1"];
      this._musician2 = values["musician_2"];
      this._personalityLocation = values["personality_location"];
    }
    
    get officer1(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._officer1);
    }
    
    get officer2(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._officer2);
    }
    
    get standardBearer1(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._standardBearer1);
    }
    
    get standardBearer2(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._standardBearer2);
    }
    
    get musician1(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._musician1);
    }
    
    get musician2(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._musician2);
    }
    
    get personalityLocation(): PersonalityLocationEnums.Entry | undefined {
      const collection = <PersonalityLocationEnums.Entry[]>this.collectionCache.getCollection(PersonalityLocationEnums.KEY, PersonalityLocationEnums.Entry);
      return collection.find(entry => entry.key === this._personalityLocation);
    }
  }
}

export default LandUnitsOfficers;
