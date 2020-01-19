import { CollectionCache, CollectionKey } from "../../../common";
import { ExperienceRankToEffectsSets } from "./ExperienceRankToEffectsSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace ExperienceRankToEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setName: string;
        readonly rank: number;
        readonly _effectKey: string;
        readonly _effectScope: string;
        readonly effectValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get setName(): ExperienceRankToEffectsSets.Entry | undefined;
        get effectKey(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default ExperienceRankToEffects;
