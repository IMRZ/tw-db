import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { StartPosFactions } from "./StartPosFactions";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace StartPosDiplomacySimpleDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _id: string;
        readonly _proposer: number;
        readonly _recipient: number;
        readonly _component: string;
        readonly establishedHowManyTurnsBeforeStartOfGame: number;
        constructor(collectionCache: CollectionCache, values: any);
        get id(): StartPosDiplomacyDeals.Entry | undefined;
        get proposer(): StartPosFactions.Entry | undefined;
        get recipient(): StartPosFactions.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default StartPosDiplomacySimpleDeals;
