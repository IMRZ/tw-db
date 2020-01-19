
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TexcBinarySplitConfigs {
  export const KEY = new CollectionKey("texc_binary_split_configs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tableName: string;
    readonly keyExpression: string;
    readonly binaryExtension: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tableName = values["table_name"];
      this.keyExpression = values["key_expression"];
      this.binaryExtension = values["binary_extension"];
    }
    
  }
}

export default TexcBinarySplitConfigs;
