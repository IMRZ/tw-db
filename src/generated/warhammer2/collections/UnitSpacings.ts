
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitSpacings {
  export const KEY = new CollectionKey("unit_spacings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly closeFormationSpacingHorizontal: number;
    readonly closeFormationSpacingVertical: number;
    readonly closeFormationSpacingVariation: number;
    readonly looseFormationSpacingHorizontal: number;
    readonly looseFormationSpacingVertical: number;
    readonly looseFormationSpacingVariation: number;
    readonly dismountedCloseFormationSpacingHorizontal: number;
    readonly dismountedCloseFormationSpacingVertical: number;
    readonly dismountedCloseFormationSpacingVariation: number;
    readonly dismountedLooseFormationSpacingHorizontal: number;
    readonly dismountedLooseFormationSpacingVertical: number;
    readonly dismountedLooseFormationSpacingVariation: number;
    readonly horde: boolean;
    readonly routingSpaceVariation: number;
    readonly isChaoticFormation: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.closeFormationSpacingHorizontal = values["close_formation_spacing_horizontal"];
      this.closeFormationSpacingVertical = values["close_formation_spacing_vertical"];
      this.closeFormationSpacingVariation = values["close_formation_spacing_variation"];
      this.looseFormationSpacingHorizontal = values["loose_formation_spacing_horizontal"];
      this.looseFormationSpacingVertical = values["loose_formation_spacing_vertical"];
      this.looseFormationSpacingVariation = values["loose_formation_spacing_variation"];
      this.dismountedCloseFormationSpacingHorizontal = values["dismounted_close_formation_spacing_horizontal"];
      this.dismountedCloseFormationSpacingVertical = values["dismounted_close_formation_spacing_vertical"];
      this.dismountedCloseFormationSpacingVariation = values["dismounted_close_formation_spacing_variation"];
      this.dismountedLooseFormationSpacingHorizontal = values["dismounted_loose_formation_spacing_horizontal"];
      this.dismountedLooseFormationSpacingVertical = values["dismounted_loose_formation_spacing_vertical"];
      this.dismountedLooseFormationSpacingVariation = values["dismounted_loose_formation_spacing_variation"];
      this.horde = !!values["horde"];
      this.routingSpaceVariation = values["routing_space_variation"];
      this.isChaoticFormation = !!values["is_chaotic_formation"];
    }
    
  }
}

export default UnitSpacings;
