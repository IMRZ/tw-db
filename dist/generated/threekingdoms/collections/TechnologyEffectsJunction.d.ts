import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace TechnologyEffectsJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _effect: string;
        readonly value: string;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technology(): Technologies.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default TechnologyEffectsJunction;
