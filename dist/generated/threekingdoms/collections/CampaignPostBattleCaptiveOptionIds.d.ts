import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignPostBattleCaptiveOptionIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly captiveOption: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignPostBattleCaptiveOptionIds;
