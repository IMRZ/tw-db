import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";
export declare namespace TechnologyFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technologyKey: string;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technologyKey: Technologies.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
    }
}
export default TechnologyFactionJunctions;
