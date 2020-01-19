import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace ReligiousRebellions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _religion: string;
        readonly percentageForRebellion: number;
        readonly _rebelShadowedFaction: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get religion(): Religions.Entry | undefined;
        get rebelShadowedFaction(): Factions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default ReligiousRebellions;
