import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { MinisterialPositions } from "./MinisterialPositions";
import { EffectBundles } from "./EffectBundles";
import { UiUnitGroupings } from "./UiUnitGroupings";
export declare namespace FrontendCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _characterGenerationTemplate: string;
        readonly _ministerialPosition: string;
        readonly _optionalSpecialisation: string;
        readonly optionalNameOverride: string;
        readonly _optionalGeneralType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get optionalSpecialisation(): EffectBundles.Entry | undefined;
        get optionalGeneralType(): UiUnitGroupings.Entry | undefined;
    }
}
export default FrontendCharacters;
