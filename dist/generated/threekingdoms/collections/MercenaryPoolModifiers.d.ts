import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPoolTypeEnums } from "./MercenaryPoolTypeEnums";
export declare namespace MercenaryPoolModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _poolType: string;
        readonly cultureOriginMatch: boolean;
        readonly minPoolCulturePercentage: number;
        readonly replenishmentModifier: number;
        readonly costModifier: number;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
        get poolType(): MercenaryPoolTypeEnums.Entry | undefined;
    }
}
export default MercenaryPoolModifiers;
