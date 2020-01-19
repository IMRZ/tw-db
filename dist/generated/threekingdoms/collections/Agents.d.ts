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
        readonly _religion: string;
        readonly cost: number;
        readonly inEncyclopedia: boolean;
        readonly encyclopediaUrl: string;
        constructor(collectionCache: CollectionCache, values: any);
        get religion(): Religions.Entry | undefined;
    }
}
export default Agents;
