
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Climates {
  export const KEY = new CollectionKey("climates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly climateType: string;
    readonly colourIndex: number;
    readonly coniferLine: number;
    readonly treeLine: number;
    readonly isLand: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.climateType = values["climate_type"];
      this.colourIndex = values["colour_index"];
      this.coniferLine = values["conifer_line"];
      this.treeLine = values["tree_line"];
      this.isLand = !!values["is_land"];
    }
    
  }
}

export default Climates;
