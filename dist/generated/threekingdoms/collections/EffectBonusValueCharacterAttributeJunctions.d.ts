import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCharacterAttributes } from "./CampaignBonusValueIdsCharacterAttributes";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";
export declare namespace EffectBonusValueCharacterAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _attributeType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsCharacterAttributes.Entry | undefined;
        get attributeType(): CharacterAttributeTypes.Entry | undefined;
    }
}
export default EffectBonusValueCharacterAttributeJunctions;
