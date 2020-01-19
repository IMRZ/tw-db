import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilityTypes } from "./UnitAbilityTypes";
import { AncillaryUniquenessGroupings } from "./AncillaryUniquenessGroupings";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { AbilityColours } from "./AbilityColours";
import { Videos } from "./Videos";
export declare namespace UnitAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly supersedesAbility: string;
        readonly requiresEffectEnabling: boolean;
        readonly tooltipText: string;
        readonly onscreenName: string;
        readonly iconName: string;
        readonly _overpowerOption: string;
        readonly _type: string;
        readonly _uniqueness: string;
        readonly isUnitUpgrade: boolean;
        readonly isHiddenInUi: boolean;
        readonly sortOrder: number;
        readonly allowMultipleSelectionUi: boolean;
        readonly _effectType: string;
        readonly _abilityColour: string;
        readonly _video: string;
        constructor(collectionCache: CollectionCache, values: any);
        get overpowerOption(): UnitAbilities.Entry | undefined;
        get type(): UnitAbilityTypes.Entry | undefined;
        get uniqueness(): AncillaryUniquenessGroupings.Entry | undefined;
        get effectType(): SpecialAbilityPhaseEffectTypes.Entry | undefined;
        get abilityColour(): AbilityColours.Entry | undefined;
        get video(): Videos.Entry | undefined;
    }
}
export default UnitAbilities;
