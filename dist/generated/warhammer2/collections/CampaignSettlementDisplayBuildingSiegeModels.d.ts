import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace CampaignSettlementDisplayBuildingSiegeModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly modelBmd: string;
        readonly blockade: boolean;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingSiegeModels;
