import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace SpecialAbilityPhaseAttributeEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _phase: string;
        readonly _attribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly phase: SpecialAbilityPhases.Entry | undefined;
        readonly attribute: UnitAttributes.Entry | undefined;
    }
}
export default SpecialAbilityPhaseAttributeEffects;
