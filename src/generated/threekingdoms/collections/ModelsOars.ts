
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsOars {
  export const KEY = new CollectionKey("models_oars");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly rigidModel: string;
    readonly leftRow: string;
    readonly leftEnd: string;
    readonly rightRow: string;
    readonly rightEnd: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.rigidModel = values["rigid_model"];
      this.leftRow = values["left_row"];
      this.leftEnd = values["left_end"];
      this.rightRow = values["right_row"];
      this.rightEnd = values["right_end"];
    }
    
  }
}

export default ModelsOars;
