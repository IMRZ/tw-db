
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";
import { Genders } from "./Genders";

export namespace MinisterialPositionsByGovTypes {
  export const KEY = new CollectionKey("ministerial_positions_by_gov_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _ministerKey: string;
    readonly _governmentType: string;
    readonly _gender: string;
    readonly _string: any;
    readonly loyaltyGained: number;
    readonly loyaltyOnLoss: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._ministerKey = values["minister_key"];
      this._governmentType = values["government_type"];
      this._gender = values["gender"];
      this._string = values["string"];
      this.loyaltyGained = values["loyalty_gained"];
      this.loyaltyOnLoss = values["loyalty_on_loss"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get ministerKey(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerKey);
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default MinisterialPositionsByGovTypes;
