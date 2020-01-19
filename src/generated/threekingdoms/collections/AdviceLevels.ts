
import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceThreads } from "./AdviceThreads";
import { Advisors } from "./Advisors";

export namespace AdviceLevels {
  export const KEY = new CollectionKey("advice_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _adviceThread: string;
    readonly adviceThreadLevel: number;
    readonly pointsNeeded: number;
    readonly gameArea: string;
    readonly category: string;
    readonly subCategory: string;
    readonly maxRepeatCount: number;
    readonly repeatInterval: number;
    readonly pauseBattle: boolean;
    readonly adviceItemTitle: string;
    readonly priorityLevel: number;
    readonly highVerbosityOnly: boolean;
    readonly locatable: boolean;
    readonly parameter: string;
    readonly onDisplayScript: string;
    readonly onClickScript: string;
    readonly suppressible: boolean;
    readonly uninhibitable: boolean;
    readonly audioClip: string;
    readonly onscreenText: string;
    readonly _advisorName: string;
    readonly forLoadingScreen: boolean;
    readonly movieLink: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._adviceThread = values["advice_thread"];
      this.adviceThreadLevel = values["advice_thread_level"];
      this.pointsNeeded = values["points_needed"];
      this.gameArea = values["game_area"];
      this.category = values["category"];
      this.subCategory = values["sub_category"];
      this.maxRepeatCount = values["max_repeat_count"];
      this.repeatInterval = values["repeat_interval"];
      this.pauseBattle = !!values["pause_battle"];
      this.adviceItemTitle = values["advice_item_title"];
      this.priorityLevel = values["priority_level"];
      this.highVerbosityOnly = !!values["high_verbosity_only"];
      this.locatable = !!values["locatable"];
      this.parameter = values["parameter"];
      this.onDisplayScript = values["on_display_script"];
      this.onClickScript = values["on_click_script"];
      this.suppressible = !!values["suppressible"];
      this.uninhibitable = !!values["uninhibitable"];
      this.audioClip = values["audio_clip"];
      this.onscreenText = values["onscreen_text"];
      this._advisorName = values["advisor_name"];
      this.forLoadingScreen = !!values["for_loading_screen"];
      this.movieLink = values["movie_link"];
    }
    
    get adviceThread(): AdviceThreads.Entry | undefined {
      const collection = <AdviceThreads.Entry[]>this.collectionCache.getCollection(AdviceThreads.KEY, AdviceThreads.Entry);
      return collection.find(entry => entry.thread === this._adviceThread);
    }
    
    get advisorName(): Advisors.Entry | undefined {
      const collection = <Advisors.Entry[]>this.collectionCache.getCollection(Advisors.KEY, Advisors.Entry);
      return collection.find(entry => entry.advisorName === this._advisorName);
    }
  }
}

export default AdviceLevels;
