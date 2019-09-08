import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAutoresolverBattleSituations } from "./CampaignAutoresolverBattleSituations";
import { CampaignAutoresolverModGroupTargets } from "./CampaignAutoresolverModGroupTargets";
import { CampaignAutoresolverModGroups } from "./CampaignAutoresolverModGroups";
export declare namespace CampaignAutoresolverSituationModGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _situationId: string;
        readonly _groupTargetId: string;
        readonly _groupId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly situationId: CampaignAutoresolverBattleSituations.Entry | undefined;
        readonly groupTargetId: CampaignAutoresolverModGroupTargets.Entry | undefined;
        readonly groupId: CampaignAutoresolverModGroups.Entry | undefined;
    }
}
export default CampaignAutoresolverSituationModGroups;
