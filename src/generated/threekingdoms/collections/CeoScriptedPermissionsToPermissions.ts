
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
import { CeoPermissions } from "./CeoPermissions";

export namespace CeoScriptedPermissionsToPermissions {
  export const KEY = new CollectionKey("ceo_scripted_permissions_to_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _scriptedPermissions: string;
    readonly _permissions: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._scriptedPermissions = values["scripted_permissions"];
      this._permissions = values["permissions"];
      this.autoId = values["auto_id"];
    }
    
    get scriptedPermissions(): CeoScriptedPermissions.Entry | undefined {
      const collection = <CeoScriptedPermissions.Entry[]>this.collectionCache.getCollection(CeoScriptedPermissions.KEY, CeoScriptedPermissions.Entry);
      return collection.find(entry => entry.key === this._scriptedPermissions);
    }
    
    get permissions(): CeoPermissions.Entry | undefined {
      const collection = <CeoPermissions.Entry[]>this.collectionCache.getCollection(CeoPermissions.KEY, CeoPermissions.Entry);
      return collection.find(entry => entry.key === this._permissions);
    }
  }
}

export default CeoScriptedPermissionsToPermissions;
