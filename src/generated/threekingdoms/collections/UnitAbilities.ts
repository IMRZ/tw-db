
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilityTypes } from "./UnitAbilityTypes";
import { AncillaryUniquenessGroupings } from "./AncillaryUniquenessGroupings";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { AbilityColours } from "./AbilityColours";
import { Videos } from "./Videos";

export namespace UnitAbilities {
  export const KEY = new CollectionKey("unit_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly supersedesAbility: string;
    readonly requiresEffectEnabling: boolean;
    readonly tooltipText: string;
    readonly onscreenName: string;
    readonly iconName: string;
    readonly _overpowerOption: string;
    readonly _type: string;
    readonly _uniqueness: string;
    readonly isUnitUpgrade: boolean;
    readonly isHiddenInUi: boolean;
    readonly sortOrder: number;
    readonly allowMultipleSelectionUi: boolean;
    readonly _effectType: string;
    readonly _abilityColour: string;
    readonly _video: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.supersedesAbility = values["supersedes_ability"];
      this.requiresEffectEnabling = !!values["requires_effect_enabling"];
      this.tooltipText = values["tooltip_text"];
      this.onscreenName = values["onscreen_name"];
      this.iconName = values["icon_name"];
      this._overpowerOption = values["overpower_option"];
      this._type = values["type"];
      this._uniqueness = values["uniqueness"];
      this.isUnitUpgrade = !!values["is_unit_upgrade"];
      this.isHiddenInUi = !!values["is_hidden_in_ui"];
      this.sortOrder = values["sort_order"];
      this.allowMultipleSelectionUi = !!values["allow_multiple_selection_ui"];
      this._effectType = values["effect_type"];
      this._abilityColour = values["ability_colour"];
      this._video = values["video"];
    }
    
    get overpowerOption(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._overpowerOption);
    }
    
    get type(): UnitAbilityTypes.Entry | undefined {
      const collection = <UnitAbilityTypes.Entry[]>this.collectionCache.getCollection(UnitAbilityTypes.KEY, UnitAbilityTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get uniqueness(): AncillaryUniquenessGroupings.Entry | undefined {
      const collection = <AncillaryUniquenessGroupings.Entry[]>this.collectionCache.getCollection(AncillaryUniquenessGroupings.KEY, AncillaryUniquenessGroupings.Entry);
      return collection.find(entry => entry.groupKey === this._uniqueness);
    }
    
    get effectType(): SpecialAbilityPhaseEffectTypes.Entry | undefined {
      const collection = <SpecialAbilityPhaseEffectTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhaseEffectTypes.KEY, SpecialAbilityPhaseEffectTypes.Entry);
      return collection.find(entry => entry.effectType === this._effectType);
    }
    
    get abilityColour(): AbilityColours.Entry | undefined {
      const collection = <AbilityColours.Entry[]>this.collectionCache.getCollection(AbilityColours.KEY, AbilityColours.Entry);
      return collection.find(entry => entry.key === this._abilityColour);
    }
    
    get video(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.key === this._video);
    }
  }
}

export default UnitAbilities;
