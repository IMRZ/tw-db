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
        readonly technology: Technologies.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
    }
}
export default TechnologyEffectsJunction;
