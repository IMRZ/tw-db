
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";
import { AudioVoActors } from "./AudioVoActors";

export namespace FrontendFactionLeaders {
  export const KEY = new CollectionKey("frontend_faction_leaders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly uniform: string;
    readonly xOffset: number;
    readonly yOffset: number;
    readonly key: string;
    readonly characterImage: string;
    readonly _preludeBattle: string;
    readonly localisedDescription: string;
    readonly localisedActionPoints: string;
    readonly _gameExpansionKey: string;
    readonly _video: string;
    readonly loadingScreenText: string;
    readonly loadingScreenImage: string;
    readonly _loadingScreenIntroVideo: string;
    readonly overrideForceLocationX: number;
    readonly overrideForceLocationY: number;
    readonly _voiceover: string;
    readonly showFullIntroOption: boolean;
    readonly difficulty: string;
    readonly startposMap: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.uniform = values["uniform"];
      this.xOffset = values["x_offset"];
      this.yOffset = values["y_offset"];
      this.key = values["key"];
      this.characterImage = values["character_image"];
      this._preludeBattle = values["prelude_battle"];
      this.localisedDescription = values["localised_description"];
      this.localisedActionPoints = values["localised_action_points"];
      this._gameExpansionKey = values["game_expansion_key"];
      this._video = values["video"];
      this.loadingScreenText = values["loading_screen_text"];
      this.loadingScreenImage = values["loading_screen_image"];
      this._loadingScreenIntroVideo = values["loading_screen_intro_video"];
      this.overrideForceLocationX = values["override_force_location_x"];
      this.overrideForceLocationY = values["override_force_location_y"];
      this._voiceover = values["voiceover"];
      this.showFullIntroOption = !!values["show_full_intro_option"];
      this.difficulty = values["difficulty"];
      this.startposMap = values["startpos_map"];
    }
    
    get preludeBattle(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._preludeBattle);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get video(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._video);
    }
    
    get loadingScreenIntroVideo(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._loadingScreenIntroVideo);
    }
    
    get voiceover(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voiceover);
    }
  }
}

export default FrontendFactionLeaders;
