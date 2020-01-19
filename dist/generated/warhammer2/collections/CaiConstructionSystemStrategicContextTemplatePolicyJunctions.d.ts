import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
export declare namespace CaiConstructionSystemStrategicContextTemplatePolicyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _caiConstructionSystemStrategicContextPolicy: string;
        readonly _caiStrategicContext: string;
        readonly _caiConstructionSystemTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get caiConstructionSystemStrategicContextPolicy(): CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined;
        get caiStrategicContext(): CaiStrategicContextTypes.Entry | undefined;
        get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemStrategicContextTemplatePolicyJunctions;
