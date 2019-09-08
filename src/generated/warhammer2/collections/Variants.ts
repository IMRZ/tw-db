
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Variants {
  export const KEY = new CollectionKey("variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly variantName: string;
    readonly techFolder: string;
    readonly variantFilename: string;
    readonly scale: number;
    readonly scaleVariation: number;
    readonly lowPolyFilename: string;
    readonly mountScale: number;
    readonly superLowPolyFilename: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.variantName = values["variant_name"];
      this.techFolder = values["tech_folder"];
      this.variantFilename = values["variant_filename"];
      this.scale = values["scale"];
      this.scaleVariation = values["scale_variation"];
      this.lowPolyFilename = values["low_poly_filename"];
      this.mountScale = values["mount_scale"];
      this.superLowPolyFilename = values["super_low_poly_filename"];
    }
    
  }
}

export default Variants;
