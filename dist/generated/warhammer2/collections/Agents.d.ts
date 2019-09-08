import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
export declare namespace Agents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly movePoints: number;
        readonly lineOfSight: number;
        readonly playable: boolean;
        readonly portraitOverride: string;
        readonly _primaryAttribute: any;
        readonly _religion: string;
        readonly factionTotalCap: number;
        readonly cost: number;
        readonly inEncyclopedia: boolean;
        readonly encyclopediaUrl: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly religion: Religions.Entry | undefined;
    }
}
export default Agents;
