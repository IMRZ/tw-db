
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
import { BmdExportTypes } from "./BmdExportTypes";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";

export namespace BattleSetPieces {
  export const KEY = new CollectionKey("battle_set_pieces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly battleName: string;
    readonly _battleType: string;
    readonly battleScript: string;
    readonly battleEnvironment: string;
    readonly battleDuration: number;
    readonly frontendIconOffsetX: number;
    readonly frontendIconOffsetY: number;
    readonly isPlayerAttacker: boolean;
    readonly _bmdLayerType: string;
    readonly useLargeArmies: boolean;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly battlefieldFolder: string;
    readonly _gameExpansionKey: string;
    readonly teleportCost: number;
    readonly catchmentArea: string;
    readonly _introMovie: string;
    readonly _outroMovieWin: string;
    readonly _outroMovieLose: string;
    readonly _battleEnvironmentAudio: string;
    readonly _campaignPreBattleIntroMovie: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.battleName = values["battle_name"];
      this._battleType = values["battle_type"];
      this.battleScript = values["battle_script"];
      this.battleEnvironment = values["battle_environment"];
      this.battleDuration = values["battle_duration"];
      this.frontendIconOffsetX = values["frontend_icon_offset_x"];
      this.frontendIconOffsetY = values["frontend_icon_offset_y"];
      this.isPlayerAttacker = !!values["is_player_attacker"];
      this._bmdLayerType = values["bmd_layer_type"];
      this.useLargeArmies = !!values["use_large_armies"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.battlefieldFolder = values["battlefield_folder"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.teleportCost = values["teleport_cost"];
      this.catchmentArea = values["catchment_area"];
      this._introMovie = values["intro_movie"];
      this._outroMovieWin = values["outro_movie_win"];
      this._outroMovieLose = values["outro_movie_lose"];
      this._battleEnvironmentAudio = values["battle_environment_audio"];
      this._campaignPreBattleIntroMovie = values["campaign_pre_battle_intro_movie"];
    }
    
    get battleType(): BattleTypes.Entry | undefined {
      const collection = <BattleTypes.Entry[]>this.collectionCache.getCollection(BattleTypes.KEY, BattleTypes.Entry);
      return collection.find(entry => entry.type === this._battleType);
    }
    
    get bmdLayerType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdLayerType);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get introMovie(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._introMovie);
    }
    
    get outroMovieWin(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._outroMovieWin);
    }
    
    get outroMovieLose(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._outroMovieLose);
    }
    
    get battleEnvironmentAudio(): AudioBattleEnvironments.Entry | undefined {
      const collection = <AudioBattleEnvironments.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironments.KEY, AudioBattleEnvironments.Entry);
      return collection.find(entry => entry.name === this._battleEnvironmentAudio);
    }
    
    get campaignPreBattleIntroMovie(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._campaignPreBattleIntroMovie);
    }
  }
}

export default BattleSetPieces;
