import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignCharacterActionSharedPerTurnLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly allowedTimesPerTurn: number;
        readonly allowedTimesPerCharacterPerTurn: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignCharacterActionSharedPerTurnLimits;
