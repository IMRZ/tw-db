
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
import { UnitAbilities } from "./UnitAbilities";

export namespace BuildingToUnitAbilitiesJunctions {
  export const KEY = new CollectionKey("building_to_unit_abilities_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingName: string;
    readonly _ability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingName = values["building_name"];
      this._ability = values["ability"];
    }
    
    get buildingName(): BattlefieldBuildings.Entry | undefined {
      const collection = <BattlefieldBuildings.Entry[]>this.collectionCache.getCollection(BattlefieldBuildings.KEY, BattlefieldBuildings.Entry);
      return collection.find(entry => entry.key === this._buildingName);
    }
    
    get ability(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
  }
}

export default BuildingToUnitAbilitiesJunctions;
