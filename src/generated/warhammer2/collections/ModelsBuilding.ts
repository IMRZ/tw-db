
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsBuilding {
  export const KEY = new CollectionKey("models_building");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly modelFile: string;
    readonly logicFile: string;
    readonly displayPath: string;
    readonly cs2File: string;
    readonly techFile: string;
    readonly collisionFile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.modelFile = values["model_file"];
      this.logicFile = values["logic_file"];
      this.displayPath = values["display_path"];
      this.cs2File = values["cs2_file"];
      this.techFile = values["tech_file"];
      this.collisionFile = values["collision_file"];
    }
    
  }
}

export default ModelsBuilding;
