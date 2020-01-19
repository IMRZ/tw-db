import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Units } from "./Units";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueUnitRecordStatModifiersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _unit: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get unit(): Units.Entry | undefined;
        get statModifier(): UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitRecordStatModifiersJunctions;
