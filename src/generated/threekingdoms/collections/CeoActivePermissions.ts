
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { CeoPermissions } from "./CeoPermissions";

export namespace CeoActivePermissions {
  export const KEY = new CollectionKey("ceo_active_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceo: string;
    readonly _permissionsGrantedWhileActive: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceo = values["ceo"];
      this._permissionsGrantedWhileActive = values["permissions_granted_while_active"];
      this.autoId = values["auto_id"];
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
    
    get permissionsGrantedWhileActive(): CeoPermissions.Entry | undefined {
      const collection = <CeoPermissions.Entry[]>this.collectionCache.getCollection(CeoPermissions.KEY, CeoPermissions.Entry);
      return collection.find(entry => entry.key === this._permissionsGrantedWhileActive);
    }
  }
}

export default CeoActivePermissions;
