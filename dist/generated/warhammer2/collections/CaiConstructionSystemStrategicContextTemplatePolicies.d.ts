import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
export declare namespace CaiConstructionSystemStrategicContextTemplatePolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultCaiConstructionSystemTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultCaiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemStrategicContextTemplatePolicies;
