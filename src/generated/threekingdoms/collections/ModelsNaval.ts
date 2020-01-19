
import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsOars } from "./ModelsOars";

export namespace ModelsNaval {
  export const KEY = new CollectionKey("models_naval");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly logicFolder: string;
    readonly riggingFile: string;
    readonly destructionFile: string;
    readonly displayFolder: string;
    readonly _oarUpper: string;
    readonly _oarMiddle: string;
    readonly _oarLower: string;
    readonly selectionIndicatorShape: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.logicFolder = values["logic_folder"];
      this.riggingFile = values["rigging_file"];
      this.destructionFile = values["destruction_file"];
      this.displayFolder = values["display_folder"];
      this._oarUpper = values["oar_upper"];
      this._oarMiddle = values["oar_middle"];
      this._oarLower = values["oar_lower"];
      this.selectionIndicatorShape = values["selection_indicator_shape"];
    }
    
    get oarUpper(): ModelsOars.Entry | undefined {
      const collection = <ModelsOars.Entry[]>this.collectionCache.getCollection(ModelsOars.KEY, ModelsOars.Entry);
      return collection.find(entry => entry.key === this._oarUpper);
    }
    
    get oarMiddle(): ModelsOars.Entry | undefined {
      const collection = <ModelsOars.Entry[]>this.collectionCache.getCollection(ModelsOars.KEY, ModelsOars.Entry);
      return collection.find(entry => entry.key === this._oarMiddle);
    }
    
    get oarLower(): ModelsOars.Entry | undefined {
      const collection = <ModelsOars.Entry[]>this.collectionCache.getCollection(ModelsOars.KEY, ModelsOars.Entry);
      return collection.find(entry => entry.key === this._oarLower);
    }
  }
}

export default ModelsNaval;
