
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TexcExpansions {
  export const KEY = new CollectionKey("texc_expansions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly expansion: string;
    readonly description: string;
    readonly packFilenameExtension: string;
    readonly released: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.expansion = values["expansion"];
      this.description = values["description"];
      this.packFilenameExtension = values["pack_filename_extension"];
      this.released = !!values["released"];
    }
    
  }
}

export default TexcExpansions;
