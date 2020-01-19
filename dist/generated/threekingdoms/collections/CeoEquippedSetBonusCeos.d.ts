import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquippedSetBonuses } from "./CeoEquippedSetBonuses";
import { Ceos } from "./Ceos";
export declare namespace CeoEquippedSetBonusCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _equippedSetBonus: string;
        readonly _ceoInSet: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get equippedSetBonus(): CeoEquippedSetBonuses.Entry | undefined;
        get ceoInSet(): Ceos.Entry | undefined;
    }
}
export default CeoEquippedSetBonusCeos;
