import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionEffectGroups } from "./FrontendFactionEffectGroups";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace FrontendFactionEffectJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _effect: string;
        readonly value: number;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): FrontendFactionEffectGroups.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get scope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default FrontendFactionEffectJunctions;
