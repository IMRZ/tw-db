import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";
export declare namespace CaiPersonalityOccupationDecisionComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CaiPersonalityOccupationDecisionComponents.Entry | undefined;
        get parent(): CaiPersonalityOccupationDecisionComponents.Entry | undefined;
    }
}
export default CaiPersonalityOccupationDecisionComponentOverrides;
