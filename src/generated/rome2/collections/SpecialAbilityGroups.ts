
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityGroups {
  export const KEY = new CollectionKey("special_ability_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly abilityGroup: string;
    readonly tooltip: string;
    readonly iconPath: string;
    readonly name: string;
    readonly specialEditionMask: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.abilityGroup = values["ability_group"];
      this.tooltip = values["tooltip"];
      this.iconPath = values["icon_path"];
      this.name = values["name"];
      this.specialEditionMask = values["special_edition_mask"];
    }
    
  }
}

export default SpecialAbilityGroups;
