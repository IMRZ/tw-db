import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignFactorialUiInfos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly positiveName: string;
        readonly negativeName: string;
        readonly icon: string;
        readonly negativeIcon: string;
        readonly effectText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignFactorialUiInfos;
