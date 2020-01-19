
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { Ceos } from "./Ceos";

export namespace CeoTemplateManagerCeoSpawnLimits {
  export const KEY = new CollectionKey("ceo_template_manager_ceo_spawn_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateManager: string;
    readonly _ceo: string;
    readonly spawnLimit: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateManager = values["template_manager"];
      this._ceo = values["ceo"];
      this.spawnLimit = values["spawn_limit"];
      this.autoId = values["auto_id"];
    }
    
    get templateManager(): CeoTemplateManagers.Entry | undefined {
      const collection = <CeoTemplateManagers.Entry[]>this.collectionCache.getCollection(CeoTemplateManagers.KEY, CeoTemplateManagers.Entry);
      return collection.find(entry => entry.key === this._templateManager);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CeoTemplateManagerCeoSpawnLimits;
