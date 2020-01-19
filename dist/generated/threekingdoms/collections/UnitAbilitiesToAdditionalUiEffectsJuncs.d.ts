import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { UnitAbilitiesAdditionalUiEffects } from "./UnitAbilitiesAdditionalUiEffects";
export declare namespace UnitAbilitiesToAdditionalUiEffectsJuncs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ability: string;
        readonly _effect: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ability(): UnitAbilities.Entry | undefined;
        get effect(): UnitAbilitiesAdditionalUiEffects.Entry | undefined;
    }
}
export default UnitAbilitiesToAdditionalUiEffectsJuncs;
