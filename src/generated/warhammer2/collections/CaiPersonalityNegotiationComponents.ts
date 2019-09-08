
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityNegotiationComponents {
  export const KEY = new CollectionKey("cai_personality_negotiation_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly initialDecline: number;
    readonly initialCounter: number;
    readonly irrelevantDecline: number;
    readonly irrelevantAccept: number;
    readonly irrelevantCounterNew: number;
    readonly irrelevantCounterLast: number;
    readonly angryRejectMin: number;
    readonly angryRejectMax: number;
    readonly noPaymentChance: number;
    readonly maxStepsAboveAcceptable: number;
    readonly noOfferChance: number;
    readonly numGoalsGenerated: number;
    readonly maxInteractions: number;
    readonly failedPaymentMod: number;
    readonly noOfferChanceFalloff: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.initialDecline = values["initial_decline"];
      this.initialCounter = values["initial_counter"];
      this.irrelevantDecline = values["irrelevant_decline"];
      this.irrelevantAccept = values["irrelevant_accept"];
      this.irrelevantCounterNew = values["irrelevant_counter_new"];
      this.irrelevantCounterLast = values["irrelevant_counter_last"];
      this.angryRejectMin = values["angry_reject_min"];
      this.angryRejectMax = values["angry_reject_max"];
      this.noPaymentChance = values["no_payment_chance"];
      this.maxStepsAboveAcceptable = values["max_steps_above_acceptable"];
      this.noOfferChance = values["no_offer_chance"];
      this.numGoalsGenerated = values["num_goals_generated"];
      this.maxInteractions = values["max_interactions"];
      this.failedPaymentMod = values["failed_payment_mod"];
      this.noOfferChanceFalloff = values["no_offer_chance_falloff"];
    }
    
  }
}

export default CaiPersonalityNegotiationComponents;
