
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldEngines } from "./BattlefieldEngines";
import { BattleEntities } from "./BattleEntities";
import { BattleAnimationsTable } from "./BattleAnimationsTable";

export namespace BattlefieldEnginesAutonomous {
  export const KEY = new CollectionKey("battlefield_engines_autonomous");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _autonomousEngineType: string;
    readonly _engineCrewEntity: string;
    readonly _engineCrewAnims: string;
    readonly numAmmo: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._autonomousEngineType = values["autonomous_engine_type"];
      this._engineCrewEntity = values["engine_crew_entity"];
      this._engineCrewAnims = values["engine_crew_anims"];
      this.numAmmo = values["num_ammo"];
    }
    
    get autonomousEngineType(): BattlefieldEngines.Entry | undefined {
      const collection = <BattlefieldEngines.Entry[]>this.collectionCache.getCollection(BattlefieldEngines.KEY, BattlefieldEngines.Entry);
      return collection.find(entry => entry.key === this._autonomousEngineType);
    }
    
    get engineCrewEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._engineCrewEntity);
    }
    
    get engineCrewAnims(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._engineCrewAnims);
    }
  }
}

export default BattlefieldEnginesAutonomous;
