import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CharacterAttributeEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _type: string;
        readonly _setFilter: string;
        readonly value: number;
        readonly _effectKey: string;
        readonly _effectScope: string;
        readonly effectValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): CharacterAttributeTypes.Entry | undefined;
        get setFilter(): CharacterAttributeSets.Entry | undefined;
        get effectKey(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CharacterAttributeEffects;
