
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { CeoGroups } from "./CeoGroups";

export namespace CeoTemplateManagerAllPossibleCeos {
  export const KEY = new CollectionKey("ceo_template_manager_all_possible_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateManager: string;
    readonly _includeCeoGroup: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateManager = values["template_manager"];
      this._includeCeoGroup = values["include_ceo_group"];
      this.autoId = values["auto_id"];
    }
    
    get templateManager(): CeoTemplateManagers.Entry | undefined {
      const collection = <CeoTemplateManagers.Entry[]>this.collectionCache.getCollection(CeoTemplateManagers.KEY, CeoTemplateManagers.Entry);
      return collection.find(entry => entry.key === this._templateManager);
    }
    
    get includeCeoGroup(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._includeCeoGroup);
    }
  }
}

export default CeoTemplateManagerAllPossibleCeos;
