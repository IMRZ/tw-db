
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CeoInitialDatas {
  export const KEY = new CollectionKey("ceo_initial_datas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _templateManager: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._templateManager = values["template_manager"];
    }
    
    get templateManager(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._templateManager);
    }
  }
}

export default CeoInitialDatas;
