import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyMovementOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirement: string;
        readonly priority: number;
        readonly _negotiationType: string;
        readonly _initiatorVariable: string;
        readonly _targetVariable: string;
        readonly localisedTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirement(): CampaignDiplomacyGroups.Entry | undefined;
        get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined;
        get initiatorVariable(): CampaignDiplomacyVariables.Entry | undefined;
        get targetVariable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptions;
