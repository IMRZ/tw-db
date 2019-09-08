import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialAbilityGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly abilityGroup: string;
        readonly iconPath: string;
        readonly name: string;
        readonly specialEditionMask: number;
        readonly sortOrder: number;
        readonly isNaval: boolean;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        readonly buttonName: string;
        readonly soundEvent: string;
        readonly isCompositeGroup: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialAbilityGroups;
