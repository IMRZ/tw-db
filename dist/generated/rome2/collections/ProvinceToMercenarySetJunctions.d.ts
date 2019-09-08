import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
import { MercenaryPools } from "./MercenaryPools";
import { Campaigns } from "./Campaigns";
export declare namespace ProvinceToMercenarySetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _province: string;
        readonly _mercenarySet: string;
        readonly _optionalCampaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly province: Provinces.Entry | undefined;
        readonly mercenarySet: MercenaryPools.Entry | undefined;
        readonly optionalCampaignKey: Campaigns.Entry | undefined;
    }
}
export default ProvinceToMercenarySetJunctions;
