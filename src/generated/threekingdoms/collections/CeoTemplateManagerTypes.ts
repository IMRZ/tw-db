
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoTemplateManagerTypes {
  export const KEY = new CollectionKey("ceo_template_manager_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default CeoTemplateManagerTypes;
