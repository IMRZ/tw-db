
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";

export namespace CaiConstructionSystemStrategicContextTemplatePolicies {
  export const KEY = new CollectionKey("cai_construction_system_strategic_context_template_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultCaiConstructionSystemTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultCaiConstructionSystemTemplate = values["default_cai_construction_system_template"];
    }
    
    get defaultCaiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._defaultCaiConstructionSystemTemplate);
    }
  }
}

export default CaiConstructionSystemStrategicContextTemplatePolicies;
