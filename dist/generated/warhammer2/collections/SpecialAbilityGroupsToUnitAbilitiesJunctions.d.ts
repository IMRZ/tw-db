import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
export declare namespace SpecialAbilityGroupsToUnitAbilitiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbilityGroups: string;
        readonly _unitSpecialAbilities: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly specialAbilityGroups: SpecialAbilityGroups.Entry | undefined;
        readonly unitSpecialAbilities: UnitSpecialAbilities.Entry | undefined;
    }
}
export default SpecialAbilityGroupsToUnitAbilitiesJunctions;
