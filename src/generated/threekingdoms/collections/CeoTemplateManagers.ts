
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CeoTemplateManagers {
  export const KEY = new CollectionKey("ceo_template_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _behviour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._behviour = values["behviour"];
    }
    
    get behviour(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._behviour);
    }
  }
}

export default CeoTemplateManagers;
