import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace AncillaryToEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _effect: string;
        readonly value: number;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ancillary: AncillaryInfo.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
    }
}
export default AncillaryToEffects;
