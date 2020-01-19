
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TexcSpreadsheets {
  export const KEY = new CollectionKey("texc_spreadsheets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly spreadsheet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.spreadsheet = values["spreadsheet"];
    }
    
  }
}

export default TexcSpreadsheets;
