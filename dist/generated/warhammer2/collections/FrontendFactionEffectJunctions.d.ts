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
        readonly group: FrontendFactionEffectGroups.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
        readonly scope: CampaignEffectScopes.Entry | undefined;
    }
}
export default FrontendFactionEffectJunctions;
