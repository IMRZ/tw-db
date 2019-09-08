
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AnimReferencePoses {
  export const KEY = new CollectionKey("anim_reference_poses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly path: string;
    readonly rootNode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.path = values["path"];
      this.rootNode = values["root_node"];
    }
    
  }
}

export default AnimReferencePoses;
