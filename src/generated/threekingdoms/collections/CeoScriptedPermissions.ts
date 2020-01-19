
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CeoScriptedPermissions {
  export const KEY = new CollectionKey("ceo_scripted_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _existsInAndProvidesPermissionToLocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._existsInAndProvidesPermissionToLocation = values["exists_in_and_provides_permission_to_location"];
    }
    
    get existsInAndProvidesPermissionToLocation(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._existsInAndProvidesPermissionToLocation);
    }
  }
}

export default CeoScriptedPermissions;
