
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";

export namespace CaiConstructionSystemStrategicContextTemplatePolicyJunctions {
  export const KEY = new CollectionKey("cai_construction_system_strategic_context_template_policy_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _caiConstructionSystemStrategicContextPolicy: string;
    readonly _caiStrategicContext: string;
    readonly _caiConstructionSystemTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._caiConstructionSystemStrategicContextPolicy = values["cai_construction_system_strategic_context_policy"];
      this._caiStrategicContext = values["cai_strategic_context"];
      this._caiConstructionSystemTemplate = values["cai_construction_system_template"];
    }
    
    get caiConstructionSystemStrategicContextPolicy(): CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined {
      const collection = <CaiConstructionSystemStrategicContextTemplatePolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemStrategicContextTemplatePolicies.KEY, CaiConstructionSystemStrategicContextTemplatePolicies.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemStrategicContextPolicy);
    }
    
    get caiStrategicContext(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._caiStrategicContext);
    }
    
    get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemTemplate);
    }
  }
}

export default CaiConstructionSystemStrategicContextTemplatePolicyJunctions;
