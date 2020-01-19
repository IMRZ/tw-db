import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquippedSetBonuses } from "./CeoEquippedSetBonuses";
import { CeoEffectLists } from "./CeoEffectLists";
export declare namespace CeoEquippedSetBonusEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _equippedSetBonus: string;
        readonly numCeosEquipped: number;
        readonly _ceoEffectList: string;
        constructor(collectionCache: CollectionCache, values: any);
        get equippedSetBonus(): CeoEquippedSetBonuses.Entry | undefined;
        get ceoEffectList(): CeoEffectLists.Entry | undefined;
    }
}
export default CeoEquippedSetBonusEffectBundles;
