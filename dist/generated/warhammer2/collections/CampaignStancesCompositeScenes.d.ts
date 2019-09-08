import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace CampaignStancesCompositeScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly _group: string;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly stance: CampaignStances.Entry | undefined;
        readonly group: CampaignGroups.Entry | undefined;
        readonly compositeScene: CampaignCompositeScenes.Entry | undefined;
    }
}
export default CampaignStancesCompositeScenes;
