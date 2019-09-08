
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Rituals } from "./Rituals";
import { Missions } from "./Missions";

export namespace CampaignGroupRituals {
  export const KEY = new CollectionKey("campaign_group_rituals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _ritual: string;
    readonly _unlockMission: string;
    readonly unlockTurn: number;
    readonly initiallyUnlocked: boolean;
    readonly unlockText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._ritual = values["ritual"];
      this._unlockMission = values["unlock_mission"];
      this.unlockTurn = values["unlock_turn"];
      this.initiallyUnlocked = !!values["initially_unlocked"];
      this.unlockText = values["unlock_text"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
    
    get unlockMission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._unlockMission);
    }
  }
}

export default CampaignGroupRituals;
