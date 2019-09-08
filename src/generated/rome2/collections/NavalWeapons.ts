
import { CollectionCache, CollectionKey } from "../../../common";
import { NavalWeaponsEnums } from "./NavalWeaponsEnums";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { ModelsEntityWeapons } from "./ModelsEntityWeapons";

export namespace NavalWeapons {
  export const KEY = new CollectionKey("naval_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly _autonomousEngine: string;
    readonly _modelsEntityWeaponry: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this._autonomousEngine = values["autonomous_engine"];
      this._modelsEntityWeaponry = values["models_entity_weaponry"];
    }
    
    get type(): NavalWeaponsEnums.Entry | undefined {
      const collection = <NavalWeaponsEnums.Entry[]>this.collectionCache.getCollection(NavalWeaponsEnums.KEY, NavalWeaponsEnums.Entry);
      return collection.find(entry => entry.types === this._type);
    }
    
    get autonomousEngine(): BattlefieldEnginesAutonomous.Entry | undefined {
      const collection = <BattlefieldEnginesAutonomous.Entry[]>this.collectionCache.getCollection(BattlefieldEnginesAutonomous.KEY, BattlefieldEnginesAutonomous.Entry);
      return collection.find(entry => entry.key === this._autonomousEngine);
    }
    
    get modelsEntityWeaponry(): ModelsEntityWeapons.Entry | undefined {
      const collection = <ModelsEntityWeapons.Entry[]>this.collectionCache.getCollection(ModelsEntityWeapons.KEY, ModelsEntityWeapons.Entry);
      return collection.find(entry => entry.key === this._modelsEntityWeaponry);
    }
  }
}

export default NavalWeapons;
