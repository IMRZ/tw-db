import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace CampaignMapWindsOfMagicStrengths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: number;
        readonly default: boolean;
        readonly localisedName: string;
        readonly frequency: number;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly compositeScene: CampaignCompositeScenes.Entry | undefined;
    }
}
export default CampaignMapWindsOfMagicStrengths;
