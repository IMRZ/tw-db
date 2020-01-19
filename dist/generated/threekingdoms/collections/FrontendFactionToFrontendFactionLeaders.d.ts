import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactions } from "./FrontendFactions";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { Campaigns } from "./Campaigns";
export declare namespace FrontendFactionToFrontendFactionLeaders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _frontendFaction: string;
        readonly _frontendFactionLeader: string;
        readonly _campaignKey: string;
        readonly isDefault: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get frontendFaction(): FrontendFactions.Entry | undefined;
        get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default FrontendFactionToFrontendFactionLeaders;
