import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
export declare namespace PoliticalPartiesFrontendLeadersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _politicalParty: string;
        readonly _frontendLeader: string;
        constructor(collectionCache: CollectionCache, values: any);
        get politicalParty(): PoliticalParties.Entry | undefined;
        get frontendLeader(): FrontendFactionLeaders.Entry | undefined;
    }
}
export default PoliticalPartiesFrontendLeadersJunctions;
