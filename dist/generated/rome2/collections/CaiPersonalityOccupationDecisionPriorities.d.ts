import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";
export declare namespace CaiPersonalityOccupationDecisionPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly option: string;
        readonly lastStandPriority: number;
        readonly totalWarPriority: number;
        readonly warPriority: number;
        readonly tensionPriority: number;
        readonly peacePriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityOccupationDecisionComponents.Entry | undefined;
    }
}
export default CaiPersonalityOccupationDecisionPriorities;
