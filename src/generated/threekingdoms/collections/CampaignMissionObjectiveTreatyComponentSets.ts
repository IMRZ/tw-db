
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";

export namespace CampaignMissionObjectiveTreatyComponentSets {
  export const KEY = new CollectionKey("campaign_mission_objective_treaty_component_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _treatyComponents: string;
    readonly descriptionSingular: string;
    readonly descriptionNotSingular: string;
    readonly descriptionAny: string;
    readonly descriptionNone: string;
    readonly descriptionOneOf: string;
    readonly descriptionAllOf: string;
    readonly descriptionNoneOf: string;
    readonly descriptionNOf: string;
    readonly descriptionNIncluding: string;
    readonly descriptionN: string;
    readonly descriptionLessThanNOf: string;
    readonly descriptionLessThanNIncluding: string;
    readonly descriptionLessThanN: string;
    readonly descriptionAllHumanPlayers: string;
    readonly descriptionNoHumanPlayers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._treatyComponents = values["treaty_components"];
      this.descriptionSingular = values["description_singular"];
      this.descriptionNotSingular = values["description_not_singular"];
      this.descriptionAny = values["description_any"];
      this.descriptionNone = values["description_none"];
      this.descriptionOneOf = values["description_one_of"];
      this.descriptionAllOf = values["description_all_of"];
      this.descriptionNoneOf = values["description_none_of"];
      this.descriptionNOf = values["description_n_of"];
      this.descriptionNIncluding = values["description_n_including"];
      this.descriptionN = values["description_n"];
      this.descriptionLessThanNOf = values["description_less_than_n_of"];
      this.descriptionLessThanNIncluding = values["description_less_than_n_including"];
      this.descriptionLessThanN = values["description_less_than_n"];
      this.descriptionAllHumanPlayers = values["description_all_human_players"];
      this.descriptionNoHumanPlayers = values["description_no_human_players"];
    }
    
    get treatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._treatyComponents);
    }
  }
}

export default CampaignMissionObjectiveTreatyComponentSets;
