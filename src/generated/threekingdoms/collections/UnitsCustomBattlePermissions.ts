
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
import { AgentUniforms } from "./AgentUniforms";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";

export namespace UnitsCustomBattlePermissions {
  export const KEY = new CollectionKey("units_custom_battle_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _faction: string;
    readonly generalUnit: boolean;
    readonly siegeUnitAttacker: boolean;
    readonly siegeUnitDefender: boolean;
    readonly generalPortrait: string;
    readonly _generalUniform: string;
    readonly _setPieceCharacter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._faction = values["faction"];
      this.generalUnit = !!values["general_unit"];
      this.siegeUnitAttacker = !!values["siege_unit_attacker"];
      this.siegeUnitDefender = !!values["siege_unit_defender"];
      this.generalPortrait = values["general_portrait"];
      this._generalUniform = values["general_uniform"];
      this._setPieceCharacter = values["set_piece_character"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get generalUniform(): AgentUniforms.Entry | undefined {
      const collection = <AgentUniforms.Entry[]>this.collectionCache.getCollection(AgentUniforms.KEY, AgentUniforms.Entry);
      return collection.find(entry => entry.uniformName === this._generalUniform);
    }
    
    get setPieceCharacter(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._setPieceCharacter);
    }
  }
}

export default UnitsCustomBattlePermissions;
