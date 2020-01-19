import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectGroups } from "./CampaignEffectGroups";
export declare namespace CampaignEffectScopesToCampaignEffectGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _groupId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CampaignEffectScopes.Entry | undefined;
        get groupId(): CampaignEffectGroups.Entry | undefined;
    }
}
export default CampaignEffectScopesToCampaignEffectGroupsJunctions;
