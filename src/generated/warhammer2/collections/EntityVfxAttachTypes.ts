
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EntityVfxAttachTypes {
  export const KEY = new CollectionKey("entity_vfx_attach_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly attachType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.attachType = values["attach_type"];
    }
    
  }
}

export default EntityVfxAttachTypes;
