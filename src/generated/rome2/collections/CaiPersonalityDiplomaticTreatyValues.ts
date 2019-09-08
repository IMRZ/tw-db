
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";

export namespace CaiPersonalityDiplomaticTreatyValues {
  export const KEY = new CollectionKey("cai_personality_diplomatic_treaty_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly defensiveAlliance: number;
    readonly tradeAgreement: number;
    readonly militaryAlliance: number;
    readonly nonAggressionPact: number;
    readonly vassalageMaster: number;
    readonly vassalageVassal: number;
    readonly clientStateProtector: number;
    readonly clientStateClient: number;
    readonly war: number;
    readonly militaryAccess: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this.defensiveAlliance = values["defensive_alliance"];
      this.tradeAgreement = values["trade_agreement"];
      this.militaryAlliance = values["military_alliance"];
      this.nonAggressionPact = values["non_aggression_pact"];
      this.vassalageMaster = values["vassalage_master"];
      this.vassalageVassal = values["vassalage_vassal"];
      this.clientStateProtector = values["client_state_protector"];
      this.clientStateClient = values["client_state_client"];
      this.war = values["war"];
      this.militaryAccess = values["military_access"];
    }
    
    get componentId(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
  }
}

export default CaiPersonalityDiplomaticTreatyValues;
