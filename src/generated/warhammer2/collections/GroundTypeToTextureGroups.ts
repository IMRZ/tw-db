
import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";

export namespace GroundTypeToTextureGroups {
  export const KEY = new CollectionKey("ground_type_to_texture_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly textureGroup: string;
    readonly _groundType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.textureGroup = values["texture_group"];
      this._groundType = values["ground_type"];
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
  }
}

export default GroundTypeToTextureGroups;
