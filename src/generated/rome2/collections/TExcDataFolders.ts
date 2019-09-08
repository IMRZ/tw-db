
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcDataFolders {
  export const KEY = new CollectionKey("TExc_data_folders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly directory: string;
    readonly codeOwner: string;
    readonly author: string;
    readonly exclude: boolean;
    readonly packingNotes: string;
    readonly _packFile: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.directory = values["directory"];
      this.codeOwner = values["code_owner"];
      this.author = values["author"];
      this.exclude = !!values["exclude"];
      this.packingNotes = values["packing_notes"];
      this._packFile = values["pack_file"];
    }
    
  }
}

export default TExcDataFolders;
