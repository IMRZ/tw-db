
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsEntityWeapons {
  export const KEY = new CollectionKey("models_entity_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly modelFile: string;
    readonly logicFile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.modelFile = values["model_file"];
      this.logicFile = values["logic_file"];
    }
    
  }
}

export default ModelsEntityWeapons;
