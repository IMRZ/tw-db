
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";

export namespace DynastyModeCharacters {
  export const KEY = new CollectionKey("dynasty_mode_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: string;
    readonly _faction: string;
    readonly _unitRecord: string;
    readonly _loadout: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._faction = values["faction"];
      this._unitRecord = values["unit_record"];
      this._loadout = values["loadout"];
    }
    
    get character(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._character);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get unitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecord);
    }
    
    get loadout(): CustomBattleLoadouts.Entry | undefined {
      const collection = <CustomBattleLoadouts.Entry[]>this.collectionCache.getCollection(CustomBattleLoadouts.KEY, CustomBattleLoadouts.Entry);
      return collection.find(entry => entry.key === this._loadout);
    }
  }
}

export default DynastyModeCharacters;
