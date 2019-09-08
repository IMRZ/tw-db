import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PoliticalParties } from "./PoliticalParties";
export declare namespace FactionPoliticalPartiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _politicalPartyKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionKey: Factions.Entry | undefined;
        readonly politicalPartyKey: PoliticalParties.Entry | undefined;
    }
}
export default FactionPoliticalPartiesJunctions;
