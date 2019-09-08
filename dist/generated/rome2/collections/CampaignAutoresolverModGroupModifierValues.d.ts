import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAutoresolverModGroups } from "./CampaignAutoresolverModGroups";
import { CampaignAutoresolverModifiers } from "./CampaignAutoresolverModifiers";
export declare namespace CampaignAutoresolverModGroupModifierValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _groupId: string;
        readonly _modificationId: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groupId: CampaignAutoresolverModGroups.Entry | undefined;
        readonly modificationId: CampaignAutoresolverModifiers.Entry | undefined;
    }
}
export default CampaignAutoresolverModGroupModifierValues;
