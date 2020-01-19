
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";

export namespace CeoInitialDataScriptedPermissions {
  export const KEY = new CollectionKey("ceo_initial_data_scripted_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initialDataStage: string;
    readonly _scriptedPermissions: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initialDataStage = values["initial_data_stage"];
      this._scriptedPermissions = values["scripted_permissions"];
      this.autoId = values["auto_id"];
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
    
    get scriptedPermissions(): CeoScriptedPermissions.Entry | undefined {
      const collection = <CeoScriptedPermissions.Entry[]>this.collectionCache.getCollection(CeoScriptedPermissions.KEY, CeoScriptedPermissions.Entry);
      return collection.find(entry => entry.key === this._scriptedPermissions);
    }
  }
}

export default CeoInitialDataScriptedPermissions;
