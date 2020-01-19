
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiMinisterialPositionInputTypes {
  export const KEY = new CollectionKey("ui_ministerial_position_input_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly inputType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.inputType = values["input_type"];
    }
    
  }
}

export default UiMinisterialPositionInputTypes;
