import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitCastes } from "./UnitCastes";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueUnitCasteStatModifiersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _caste: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get caste(): UnitCastes.Entry | undefined;
        get statModifier(): UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitCasteStatModifiersJunctions;
