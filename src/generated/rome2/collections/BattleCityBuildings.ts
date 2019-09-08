
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleCities } from "./BattleCities";

export namespace BattleCityBuildings {
  export const KEY = new CollectionKey("battle_city_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _city: string;
    readonly amountInTown: number;
    readonly amountInCity: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._city = values["city"];
      this.amountInTown = values["amount_in_town"];
      this.amountInCity = values["amount_in_city"];
    }
    
    get building(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._building);
    }
    
    get city(): BattleCities.Entry | undefined {
      const collection = <BattleCities.Entry[]>this.collectionCache.getCollection(BattleCities.KEY, BattleCities.Entry);
      return collection.find(entry => entry.city === this._city);
    }
  }
}

export default BattleCityBuildings;
