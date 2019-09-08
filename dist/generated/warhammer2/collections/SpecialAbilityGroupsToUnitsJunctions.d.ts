import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { MainUnits } from "./MainUnits";
export declare namespace SpecialAbilityGroupsToUnitsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _abilityGroup: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly abilityGroup: SpecialAbilityGroups.Entry | undefined;
        readonly unit: MainUnits.Entry | undefined;
    }
}
export default SpecialAbilityGroupsToUnitsJunctions;
