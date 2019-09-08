import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { UnitAttributes } from "./UnitAttributes";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
export declare namespace SpecialAbilityPhaseAttributeEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _phase: string;
        readonly _attribute: string;
        readonly _attributeType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly phase: SpecialAbilityPhases.Entry | undefined;
        readonly attribute: UnitAttributes.Entry | undefined;
        readonly attributeType: SpecialAbilityPhaseEffectTypes.Entry | undefined;
    }
}
export default SpecialAbilityPhaseAttributeEffects;
