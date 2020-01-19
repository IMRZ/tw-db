
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";

export namespace CustomBattleCharacters {
  export const KEY = new CollectionKey("custom_battle_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: string;
    readonly _faction: string;
    readonly _unitRecordRomance: string;
    readonly _unitRecordHistorical: string;
    readonly hideInCustomBattle: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._faction = values["faction"];
      this._unitRecordRomance = values["unit_record_romance"];
      this._unitRecordHistorical = values["unit_record_historical"];
      this.hideInCustomBattle = !!values["hide_in_custom_battle"];
    }
    
    get character(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._character);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get unitRecordRomance(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecordRomance);
    }
    
    get unitRecordHistorical(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecordHistorical);
    }
  }
}

export default CustomBattleCharacters;
