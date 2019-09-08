
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";

export namespace WarscapeRigidLod {
  export const KEY = new CollectionKey("warscape_rigid_lod");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly filename: string;
    readonly range: string;
    readonly _rigid: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.filename = values["filename"];
      this.range = values["range"];
      this._rigid = values["rigid"];
    }
    
    get rigid(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._rigid);
    }
  }
}

export default WarscapeRigidLod;
