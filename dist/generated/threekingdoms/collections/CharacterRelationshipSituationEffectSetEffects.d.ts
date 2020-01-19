import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CharacterRelationshipSituationEffectSetEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectSet: string;
        readonly _effect: string;
        readonly _scope: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectSet(): CharacterRelationshipSituationEffectSets.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get scope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CharacterRelationshipSituationEffectSetEffects;
