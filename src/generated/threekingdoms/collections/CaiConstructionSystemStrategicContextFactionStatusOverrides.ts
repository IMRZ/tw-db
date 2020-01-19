
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";

export namespace CaiConstructionSystemStrategicContextFactionStatusOverrides {
  export const KEY = new CollectionKey("cai_construction_system_strategic_context_faction_status_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _constructionSystemStrategicContextPolicy: string;
    readonly _strategicContext: string;
    readonly _factionStatus: string;
    readonly _caiConstructionSystemTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._constructionSystemStrategicContextPolicy = values["construction_system_strategic_context_policy"];
      this._strategicContext = values["strategic_context"];
      this._factionStatus = values["faction_status"];
      this._caiConstructionSystemTemplate = values["cai_construction_system_template"];
    }
    
    get constructionSystemStrategicContextPolicy(): CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined {
      const collection = <CaiConstructionSystemStrategicContextTemplatePolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemStrategicContextTemplatePolicies.KEY, CaiConstructionSystemStrategicContextTemplatePolicies.Entry);
      return collection.find(entry => entry.key === this._constructionSystemStrategicContextPolicy);
    }
    
    get strategicContext(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContext);
    }
    
    get factionStatus(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._factionStatus);
    }
    
    get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemTemplate);
    }
  }
}

export default CaiConstructionSystemStrategicContextFactionStatusOverrides;
