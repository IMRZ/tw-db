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
        get ancillary(): AncillaryInfo.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default AncillaryToEffects;
