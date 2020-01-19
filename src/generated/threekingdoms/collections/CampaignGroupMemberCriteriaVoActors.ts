
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { AudioVoActors } from "./AudioVoActors";

export namespace CampaignGroupMemberCriteriaVoActors {
  export const KEY = new CollectionKey("campaign_group_member_criteria_vo_actors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _voActor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._voActor = values["vo_actor"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get voActor(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor);
    }
  }
}

export default CampaignGroupMemberCriteriaVoActors;
