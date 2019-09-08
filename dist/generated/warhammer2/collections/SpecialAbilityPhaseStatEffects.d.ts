import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";
export declare namespace SpecialAbilityPhaseStatEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _phase: string;
        readonly value: string;
        readonly _stat: string;
        readonly _how: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly phase: SpecialAbilityPhases.Entry | undefined;
        readonly stat: ModifiableUnitStats.Entry | undefined;
        readonly how: UnitStatModifiersHowEnums.Entry | undefined;
    }
}
export default SpecialAbilityPhaseStatEffects;
