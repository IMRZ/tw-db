
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSpawners } from "./CeoSpawners";
import { Ceos } from "./Ceos";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";

export namespace CeoSpawnerCanSpawnRequirements {
  export const KEY = new CollectionKey("ceo_spawner_can_spawn_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _spawner: string;
    readonly _requiredCeo1: string;
    readonly _requiredCeo2: string;
    readonly _requiredCeo3: string;
    readonly _targetCeoManager: string;
    readonly _targetEquipmentManager: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._spawner = values["spawner"];
      this._requiredCeo1 = values["required_ceo_1"];
      this._requiredCeo2 = values["required_ceo_2"];
      this._requiredCeo3 = values["required_ceo_3"];
      this._targetCeoManager = values["target_ceo_manager"];
      this._targetEquipmentManager = values["target_equipment_manager"];
      this.autoId = values["auto_id"];
    }
    
    get spawner(): CeoSpawners.Entry | undefined {
      const collection = <CeoSpawners.Entry[]>this.collectionCache.getCollection(CeoSpawners.KEY, CeoSpawners.Entry);
      return collection.find(entry => entry.key === this._spawner);
    }
    
    get requiredCeo1(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo1);
    }
    
    get requiredCeo2(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo2);
    }
    
    get requiredCeo3(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo3);
    }
    
    get targetCeoManager(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._targetCeoManager);
    }
    
    get targetEquipmentManager(): CeoEquipmentManagerTypes.Entry | undefined {
      const collection = <CeoEquipmentManagerTypes.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagerTypes.KEY, CeoEquipmentManagerTypes.Entry);
      return collection.find(entry => entry.key === this._targetEquipmentManager);
    }
  }
}

export default CeoSpawnerCanSpawnRequirements;
