import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace MinisterialPositionsToCharacterEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _position: string;
        readonly ministerLevel: number;
        readonly _effect: string;
        readonly value: number;
        readonly uiId: number;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get position(): MinisterialPositions.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default MinisterialPositionsToCharacterEffects;
