import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
export declare namespace SpecialAbilityToSpecialAbilityPhaseJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbility: string;
        readonly _phase: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get specialAbility(): UnitSpecialAbilities.Entry | undefined;
        get phase(): SpecialAbilityPhases.Entry | undefined;
    }
}
export default SpecialAbilityToSpecialAbilityPhaseJunctions;
