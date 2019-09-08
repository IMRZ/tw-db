
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDealEvaluationComponents {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly maxPaymentValue: number;
    readonly paymentTreacheryValue: number;
    readonly paymentOfferedMultiplier: number;
    readonly paymentRequestedMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.maxPaymentValue = values["max_payment_value"];
      this.paymentTreacheryValue = values["payment_treachery_value"];
      this.paymentOfferedMultiplier = values["payment_offered_multiplier"];
      this.paymentRequestedMultiplier = values["payment_requested_multiplier"];
    }
    
  }
}

export default CaiPersonalityDealEvaluationComponents;
