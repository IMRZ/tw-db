
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityNegotiationComponents {
  export const KEY = new CollectionKey("cai_personality_negotiation_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly noPaymentChance: number;
    readonly noOfferChance: number;
    readonly maxInteractions: number;
    readonly noOfferChanceFalloff: number;
    readonly numGoalsGenerated: number;
    readonly minimumWaitBetweenOffersToPlayer: number;
    readonly noOfferChanceFalloffGlobal: number;
    readonly noOfferChanceGlobal: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.noPaymentChance = values["no_payment_chance"];
      this.noOfferChance = values["no_offer_chance"];
      this.maxInteractions = values["max_interactions"];
      this.noOfferChanceFalloff = values["no_offer_chance_falloff"];
      this.numGoalsGenerated = values["num_goals_generated"];
      this.minimumWaitBetweenOffersToPlayer = values["minimum_wait_between_offers_to_player"];
      this.noOfferChanceFalloffGlobal = values["no_offer_chance_falloff_global"];
      this.noOfferChanceGlobal = values["no_offer_chance_global"];
    }
    
  }
}

export default CaiPersonalityNegotiationComponents;
