
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiMinisterialPositionSetSpacings {
  export const KEY = new CollectionKey("ui_ministerial_position_set_spacings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly spacing: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.spacing = values["spacing"];
    }
    
  }
}

export default UiMinisterialPositionSetSpacings;
