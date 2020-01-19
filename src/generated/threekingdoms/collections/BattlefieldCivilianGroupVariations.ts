
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianGroups } from "./BattlefieldCivilianGroups";
import { MainUnits } from "./MainUnits";
import { BattlefieldCivilianBehaviourGroups } from "./BattlefieldCivilianBehaviourGroups";

export namespace BattlefieldCivilianGroupVariations {
  export const KEY = new CollectionKey("battlefield_civilian_group_variations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _civilianGroup: string;
    readonly climateLookup: string;
    readonly seasonLookup: string;
    readonly timeOfDayLookup: string;
    readonly precipitationTypeLookup: string;
    readonly civilianAmountScale: number;
    readonly _civilianUnit: string;
    readonly _civilianBehaviourGroup: string;
    readonly proportionOfCiviliansToSpawnInsideShelters: number;
    readonly maxShelterCapacity: number;
    readonly tileUpgradesLookup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._civilianGroup = values["civilian_group"];
      this.climateLookup = values["climate_lookup"];
      this.seasonLookup = values["season_lookup"];
      this.timeOfDayLookup = values["time_of_day_lookup"];
      this.precipitationTypeLookup = values["precipitation_type_lookup"];
      this.civilianAmountScale = values["civilian_amount_scale"];
      this._civilianUnit = values["civilian_unit"];
      this._civilianBehaviourGroup = values["civilian_behaviour_group"];
      this.proportionOfCiviliansToSpawnInsideShelters = values["proportion_of_civilians_to_spawn_inside_shelters"];
      this.maxShelterCapacity = values["max_shelter_capacity"];
      this.tileUpgradesLookup = values["tile_upgrades_lookup"];
    }
    
    get civilianGroup(): BattlefieldCivilianGroups.Entry | undefined {
      const collection = <BattlefieldCivilianGroups.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianGroups.KEY, BattlefieldCivilianGroups.Entry);
      return collection.find(entry => entry.key === this._civilianGroup);
    }
    
    get civilianUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._civilianUnit);
    }
    
    get civilianBehaviourGroup(): BattlefieldCivilianBehaviourGroups.Entry | undefined {
      const collection = <BattlefieldCivilianBehaviourGroups.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianBehaviourGroups.KEY, BattlefieldCivilianBehaviourGroups.Entry);
      return collection.find(entry => entry.key === this._civilianBehaviourGroup);
    }
  }
}

export default BattlefieldCivilianGroupVariations;
