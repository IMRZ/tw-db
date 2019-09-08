
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { RitualChains } from "./RitualChains";
import { Missions } from "./Missions";

export namespace CampaignGroupRitualChains {
  export const KEY = new CollectionKey("campaign_group_ritual_chains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _ritualChain: string;
    readonly _unlockMission: string;
    readonly unlockTurn: number;
    readonly sharedProgress: boolean;
    readonly initiallyUnlocked: boolean;
    readonly unlockText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._ritualChain = values["ritual_chain"];
      this._unlockMission = values["unlock_mission"];
      this.unlockTurn = values["unlock_turn"];
      this.sharedProgress = !!values["shared_progress"];
      this.initiallyUnlocked = !!values["initially_unlocked"];
      this.unlockText = values["unlock_text"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get ritualChain(): RitualChains.Entry | undefined {
      const collection = <RitualChains.Entry[]>this.collectionCache.getCollection(RitualChains.KEY, RitualChains.Entry);
      return collection.find(entry => entry.key === this._ritualChain);
    }
    
    get unlockMission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._unlockMission);
    }
  }
}

export default CampaignGroupRitualChains;
