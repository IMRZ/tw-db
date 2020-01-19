
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AncillaryUniquenessGroupings {
  export const KEY = new CollectionKey("ancillary_uniqueness_groupings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;
    readonly uniquenessMin: number;
    readonly uniquenessMax: number;
    readonly colR: number;
    readonly colG: number;
    readonly colB: number;
    readonly uiState: string;
    readonly onscreenName: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
      this.uniquenessMin = values["uniqueness_min"];
      this.uniquenessMax = values["uniqueness_max"];
      this.colR = values["col_r"];
      this.colG = values["col_g"];
      this.colB = values["col_b"];
      this.uiState = values["ui_state"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
    }
    
  }
}

export default AncillaryUniquenessGroupings;
