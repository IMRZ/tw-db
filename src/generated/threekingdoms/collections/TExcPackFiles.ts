
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcPackFiles {
  export const KEY = new CollectionKey("TExc_pack_files");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly packFile: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.packFile = values["pack_file"];
      this.notes = values["notes"];
    }
    
  }
}

export default TExcPackFiles;
