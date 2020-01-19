
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionPermissions } from "./MinisterialPositionPermissions";

export namespace MinisterialPositionPermissionJunctions {
  export const KEY = new CollectionKey("ministerial_position_permission_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _permission: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._permission = values["permission"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get permission(): MinisterialPositionPermissions.Entry | undefined {
      const collection = <MinisterialPositionPermissions.Entry[]>this.collectionCache.getCollection(MinisterialPositionPermissions.KEY, MinisterialPositionPermissions.Entry);
      return collection.find(entry => entry.key === this._permission);
    }
  }
}

export default MinisterialPositionPermissionJunctions;
