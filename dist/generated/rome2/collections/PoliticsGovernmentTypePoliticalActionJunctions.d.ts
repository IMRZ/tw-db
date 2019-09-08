import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticsGovernmentTypes } from "./PoliticsGovernmentTypes";
import { PoliticalActions } from "./PoliticalActions";
export declare namespace PoliticsGovernmentTypePoliticalActionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _governmentType: string;
        readonly _politicalAction: string;
        readonly isAvailableForFactionLeader: boolean;
        readonly isAvailableForNonRulingPartyLeaders: boolean;
        readonly isAvailableForRulingPartyMembers: boolean;
        readonly isAvailableForNonRulingPartyMembers: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly governmentType: PoliticsGovernmentTypes.Entry | undefined;
        readonly politicalAction: PoliticalActions.Entry | undefined;
    }
}
export default PoliticsGovernmentTypePoliticalActionJunctions;
