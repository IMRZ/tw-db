import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
export declare namespace SpecialAbilityToInvalidTargetFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbility: string;
        readonly _invalidTarget: string;
        constructor(collectionCache: CollectionCache, values: any);
        get specialAbility(): UnitSpecialAbilities.Entry | undefined;
        get invalidTarget(): SpecialAbilityInvalidUsageFlags.Entry | undefined;
    }
}
export default SpecialAbilityToInvalidTargetFlags;
