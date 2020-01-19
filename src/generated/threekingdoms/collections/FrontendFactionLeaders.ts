
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { AudioVoActors } from "./AudioVoActors";
import { Videos } from "./Videos";
import { FrontendCharacters } from "./FrontendCharacters";
import { EffectBundles } from "./EffectBundles";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";

export namespace FrontendFactionLeaders {
  export const KEY = new CollectionKey("frontend_faction_leaders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _preludeBattle: string;
    readonly localisedDescription: string;
    readonly localisedActionPoints: string;
    readonly loadingScreenText: string;
    readonly loadingScreenImage: string;
    readonly overrideForceLocationX: number;
    readonly overrideForceLocationY: number;
    readonly localisedSubtitle: string;
    readonly localisedDifficulty: string;
    readonly _voiceover: string;
    readonly sortOrder: number;
    readonly victoryScreenImage: string;
    readonly defeatScreenImage: string;
    readonly _video: string;
    readonly _loadingScreenIntroVideo: string;
    readonly _frontendCharacter: string;
    readonly _factionLeaderEffectBundle: string;
    readonly _startingProgressionLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._preludeBattle = values["prelude_battle"];
      this.localisedDescription = values["localised_description"];
      this.localisedActionPoints = values["localised_action_points"];
      this.loadingScreenText = values["loading_screen_text"];
      this.loadingScreenImage = values["loading_screen_image"];
      this.overrideForceLocationX = values["override_force_location_x"];
      this.overrideForceLocationY = values["override_force_location_y"];
      this.localisedSubtitle = values["localised_subtitle"];
      this.localisedDifficulty = values["localised_difficulty"];
      this._voiceover = values["voiceover"];
      this.sortOrder = values["sort_order"];
      this.victoryScreenImage = values["victory_screen_image"];
      this.defeatScreenImage = values["defeat_screen_image"];
      this._video = values["video"];
      this._loadingScreenIntroVideo = values["loading_screen_intro_video"];
      this._frontendCharacter = values["frontend_character"];
      this._factionLeaderEffectBundle = values["faction_leader_effect_bundle"];
      this._startingProgressionLevel = values["starting_progression_level"];
    }
    
    get preludeBattle(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._preludeBattle);
    }
    
    get voiceover(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voiceover);
    }
    
    get video(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.key === this._video);
    }
    
    get loadingScreenIntroVideo(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.key === this._loadingScreenIntroVideo);
    }
    
    get frontendCharacter(): FrontendCharacters.Entry | undefined {
      const collection = <FrontendCharacters.Entry[]>this.collectionCache.getCollection(FrontendCharacters.KEY, FrontendCharacters.Entry);
      return collection.find(entry => entry.key === this._frontendCharacter);
    }
    
    get factionLeaderEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._factionLeaderEffectBundle);
    }
    
    get startingProgressionLevel(): CampaignProgressionLevelDetails.Entry | undefined {
      const collection = <CampaignProgressionLevelDetails.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelDetails.KEY, CampaignProgressionLevelDetails.Entry);
      return collection.find(entry => entry.key === this._startingProgressionLevel);
    }
  }
}

export default FrontendFactionLeaders;
