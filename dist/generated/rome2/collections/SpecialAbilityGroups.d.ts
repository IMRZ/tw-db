import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialAbilityGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly abilityGroup: string;
        readonly tooltip: string;
        readonly iconPath: string;
        readonly name: string;
        readonly specialEditionMask: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialAbilityGroups;
