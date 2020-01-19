
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcPackCategories {
  export const KEY = new CollectionKey("TExc_PackCategories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly packCategory: string;
    readonly scriptName: string;
    readonly packFile: string;
    readonly localisationFile: string;
    readonly locked: boolean;
    readonly lockedBy: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.packCategory = values["pack_category"];
      this.scriptName = values["script_name"];
      this.packFile = values["pack_file"];
      this.localisationFile = values["localisation_file"];
      this.locked = !!values["locked"];
      this.lockedBy = values["locked_by"];
    }
    
  }
}

export default TExcPackCategories;
