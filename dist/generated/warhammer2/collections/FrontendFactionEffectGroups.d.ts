import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { Campaigns } from "./Campaigns";
export declare namespace FrontendFactionEffectGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupKey: string;
        readonly _factionLeader: string;
        readonly _campaign: string;
        readonly uiSection: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionLeader: FrontendFactionLeaders.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default FrontendFactionEffectGroups;
