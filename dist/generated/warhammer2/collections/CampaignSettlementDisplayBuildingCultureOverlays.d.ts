import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace CampaignSettlementDisplayBuildingCultureOverlays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly bmd: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingCultureOverlays;
