import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
export declare namespace CaiPersonalityDiplomaticComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly component: CaiPersonalityDiplomaticComponents.Entry | undefined;
        readonly parent: CaiPersonalityDiplomaticComponents.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticComponentOverrides;
