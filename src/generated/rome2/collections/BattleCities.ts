
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCities {
  export const KEY = new CollectionKey("battle_cities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly city: string;
    readonly minimumBuildingScale: number;
    readonly maximumBuildingScale: number;
    readonly townMinDistance: number;
    readonly cityMinDistance: number;
    readonly townRadius: number;
    readonly cityRadius: number;
    readonly numberOfTownBuildings: number;
    readonly numberOfCityBuildings: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.city = values["city"];
      this.minimumBuildingScale = values["minimum_building_scale"];
      this.maximumBuildingScale = values["maximum_building_scale"];
      this.townMinDistance = values["town_min_distance"];
      this.cityMinDistance = values["city_min_distance"];
      this.townRadius = values["town_radius"];
      this.cityRadius = values["city_radius"];
      this.numberOfTownBuildings = values["number_of_town_buildings"];
      this.numberOfCityBuildings = values["number_of_city_buildings"];
    }
    
  }
}

export default BattleCities;
