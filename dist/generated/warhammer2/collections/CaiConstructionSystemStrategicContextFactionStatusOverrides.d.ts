import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
export declare namespace CaiConstructionSystemStrategicContextFactionStatusOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _constructionSystemStrategicContextPolicy: string;
        readonly _strategicContext: string;
        readonly _factionStatus: string;
        readonly _caiConstructionSystemTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly constructionSystemStrategicContextPolicy: CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined;
        readonly strategicContext: CaiStrategicContextTypes.Entry | undefined;
        readonly factionStatus: CaiFactionStatuses.Entry | undefined;
        readonly caiConstructionSystemTemplate: CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemStrategicContextFactionStatusOverrides;
