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
        get constructionSystemStrategicContextPolicy(): CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined;
        get strategicContext(): CaiStrategicContextTypes.Entry | undefined;
        get factionStatus(): CaiFactionStatuses.Entry | undefined;
        get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemStrategicContextFactionStatusOverrides;
