
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { MinisterialPositions } from "./MinisterialPositions";
import { EffectBundles } from "./EffectBundles";
import { UiUnitGroupings } from "./UiUnitGroupings";

export namespace FrontendCharacters {
  export const KEY = new CollectionKey("frontend_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _characterGenerationTemplate: string;
    readonly _ministerialPosition: string;
    readonly _optionalSpecialisation: string;
    readonly optionalNameOverride: string;
    readonly _optionalGeneralType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._characterGenerationTemplate = values["character_generation_template"];
      this._ministerialPosition = values["ministerial_position"];
      this._optionalSpecialisation = values["optional_specialisation"];
      this.optionalNameOverride = values["optional_name_override"];
      this._optionalGeneralType = values["optional_general_type"];
    }
    
    get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._characterGenerationTemplate);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get optionalSpecialisation(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._optionalSpecialisation);
    }
    
    get optionalGeneralType(): UiUnitGroupings.Entry | undefined {
      const collection = <UiUnitGroupings.Entry[]>this.collectionCache.getCollection(UiUnitGroupings.KEY, UiUnitGroupings.Entry);
      return collection.find(entry => entry.key === this._optionalGeneralType);
    }
  }
}

export default FrontendCharacters;
