import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { StartPosDiplomacyComplexDealParticipantSets } from "./StartPosDiplomacyComplexDealParticipantSets";
export declare namespace StartPosDiplomacyComplexDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly _participants: string;
        readonly establishedHowManyTurnsBeforeStartOfGame: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacyDeals.Entry | undefined;
        get participants(): StartPosDiplomacyComplexDealParticipantSets.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDeals;
