
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsSieges {
  export const KEY = new CollectionKey("models_sieges");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly modelFile: string;
    readonly logicFile: string;
    readonly displayPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.modelFile = values["model_file"];
      this.logicFile = values["logic_file"];
      this.displayPath = values["display_path"];
    }
    
  }
}

export default ModelsSieges;
