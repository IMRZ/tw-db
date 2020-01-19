
import { CollectionCache, CollectionKey } from "../../../common";
import { Mounts } from "./Mounts";
import { LandUnitArticulatedVehicles } from "./LandUnitArticulatedVehicles";
import { BattlefieldEngines } from "./BattlefieldEngines";
import { Animals } from "./Animals";
import { ShipDbs } from "./ShipDbs";
import { BattlePersonalityTypesEnum } from "./BattlePersonalityTypesEnum";
import { Mens } from "./Mens";

export namespace ComposedEntities {
  export const KEY = new CollectionKey("composed_entities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly numMen: number;
    readonly _mount: string;
    readonly numMounts: number;
    readonly _articulatedVehicle: string;
    readonly _engine: string;
    readonly numEngines: number;
    readonly _animal: string;
    readonly numAnimals: number;
    readonly _ship: string;
    readonly numShips: number;
    readonly areDraughtsMounted: boolean;
    readonly canBeDismounted: boolean;
    readonly _personalityType: string;
    readonly _man: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.numMen = values["num_men"];
      this._mount = values["mount"];
      this.numMounts = values["num_mounts"];
      this._articulatedVehicle = values["articulated_vehicle"];
      this._engine = values["engine"];
      this.numEngines = values["num_engines"];
      this._animal = values["animal"];
      this.numAnimals = values["num_animals"];
      this._ship = values["ship"];
      this.numShips = values["num_ships"];
      this.areDraughtsMounted = !!values["are_draughts_mounted"];
      this.canBeDismounted = !!values["can_be_dismounted"];
      this._personalityType = values["personality_type"];
      this._man = values["man"];
    }
    
    get mount(): Mounts.Entry | undefined {
      const collection = <Mounts.Entry[]>this.collectionCache.getCollection(Mounts.KEY, Mounts.Entry);
      return collection.find(entry => entry.key === this._mount);
    }
    
    get articulatedVehicle(): LandUnitArticulatedVehicles.Entry | undefined {
      const collection = <LandUnitArticulatedVehicles.Entry[]>this.collectionCache.getCollection(LandUnitArticulatedVehicles.KEY, LandUnitArticulatedVehicles.Entry);
      return collection.find(entry => entry.key === this._articulatedVehicle);
    }
    
    get engine(): BattlefieldEngines.Entry | undefined {
      const collection = <BattlefieldEngines.Entry[]>this.collectionCache.getCollection(BattlefieldEngines.KEY, BattlefieldEngines.Entry);
      return collection.find(entry => entry.key === this._engine);
    }
    
    get animal(): Animals.Entry | undefined {
      const collection = <Animals.Entry[]>this.collectionCache.getCollection(Animals.KEY, Animals.Entry);
      return collection.find(entry => entry.key === this._animal);
    }
    
    get ship(): ShipDbs.Entry | undefined {
      const collection = <ShipDbs.Entry[]>this.collectionCache.getCollection(ShipDbs.KEY, ShipDbs.Entry);
      return collection.find(entry => entry.key === this._ship);
    }
    
    get personalityType(): BattlePersonalityTypesEnum.Entry | undefined {
      const collection = <BattlePersonalityTypesEnum.Entry[]>this.collectionCache.getCollection(BattlePersonalityTypesEnum.KEY, BattlePersonalityTypesEnum.Entry);
      return collection.find(entry => entry.key === this._personalityType);
    }
    
    get man(): Mens.Entry | undefined {
      const collection = <Mens.Entry[]>this.collectionCache.getCollection(Mens.KEY, Mens.Entry);
      return collection.find(entry => entry.key === this._man);
    }
  }
}

export default ComposedEntities;
