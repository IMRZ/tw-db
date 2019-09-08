
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAbilities {
  export const KEY = new CollectionKey("unit_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly stationaryForTurn: boolean;
    readonly supersedesAbility: string;
    readonly requiresEffectEnabling: boolean;
    readonly tooltipText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.stationaryForTurn = !!values["stationary_for_turn"];
      this.supersedesAbility = values["supersedes_ability"];
      this.requiresEffectEnabling = !!values["requires_effect_enabling"];
      this.tooltipText = values["tooltip_text"];
    }
    
  }
}

export default UnitAbilities;
