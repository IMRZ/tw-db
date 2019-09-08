import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
export declare namespace SpecialAbilityGroupParents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _child: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly child: SpecialAbilityGroups.Entry | undefined;
        readonly parent: SpecialAbilityGroups.Entry | undefined;
    }
}
export default SpecialAbilityGroupParents;
