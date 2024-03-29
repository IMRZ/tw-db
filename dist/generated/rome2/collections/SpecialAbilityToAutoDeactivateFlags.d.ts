import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
export declare namespace SpecialAbilityToAutoDeactivateFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _invalidUsageFlag: string;
        readonly _specialAbilityKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get invalidUsageFlag(): SpecialAbilityInvalidUsageFlags.Entry | undefined;
        get specialAbilityKey(): UnitSpecialAbilities.Entry | undefined;
    }
}
export default SpecialAbilityToAutoDeactivateFlags;
