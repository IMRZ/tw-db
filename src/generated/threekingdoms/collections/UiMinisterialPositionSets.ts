
import { CollectionCache, CollectionKey } from "../../../common";
import { UiMinisterialPositionSetSpacings } from "./UiMinisterialPositionSetSpacings";

export namespace UiMinisterialPositionSets {
  export const KEY = new CollectionKey("ui_ministerial_position_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _spacing: string;
    readonly courtRow: number;
    readonly optionalSetHeader: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._spacing = values["spacing"];
      this.courtRow = values["court_row"];
      this.optionalSetHeader = values["optional_set_header"];
    }
    
    get spacing(): UiMinisterialPositionSetSpacings.Entry | undefined {
      const collection = <UiMinisterialPositionSetSpacings.Entry[]>this.collectionCache.getCollection(UiMinisterialPositionSetSpacings.KEY, UiMinisterialPositionSetSpacings.Entry);
      return collection.find(entry => entry.spacing === this._spacing);
    }
  }
}

export default UiMinisterialPositionSets;
