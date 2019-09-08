import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilityTypes } from "./UnitAbilityTypes";
import { Videos } from "./Videos";
import { AncillaryUniquenessGroupings } from "./AncillaryUniquenessGroupings";
import { UnitAbilitySourceTypes } from "./UnitAbilitySourceTypes";
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
        readonly _video: string;
        readonly _uniqueness: string;
        readonly isUnitUpgrade: boolean;
        readonly isHiddenInUi: boolean;
        readonly _sourceType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly overpowerOption: UnitAbilities.Entry | undefined;
        readonly type: UnitAbilityTypes.Entry | undefined;
        readonly video: Videos.Entry | undefined;
        readonly uniqueness: AncillaryUniquenessGroupings.Entry | undefined;
        readonly sourceType: UnitAbilitySourceTypes.Entry | undefined;
    }
}
export default UnitAbilities;
