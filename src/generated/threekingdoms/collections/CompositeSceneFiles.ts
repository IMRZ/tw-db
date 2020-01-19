
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CompositeSceneFiles {
  export const KEY = new CollectionKey("composite_scene_files");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly sceneFilepath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.sceneFilepath = values["scene_filepath"];
    }
    
  }
}

export default CompositeSceneFiles;
