
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { StartPosDiplomacyDealActions } from "./StartPosDiplomacyDealActions";

export namespace StartPosDiplomacyDeals {
  export const KEY = new CollectionKey("start_pos_diplomacy_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _instigator: number;
    readonly _recipient: number;
    readonly expiresOnRound: number;
    readonly _onExpiryInstigatorWill: string;
    readonly _onExpiryRecipientWill: string;
    readonly _onInstigatorCancelInstigatorWill: string;
    readonly _onInstigatorCancelRecipientWill: string;
    readonly _onRecipientCancelInstigatorWill: string;
    readonly _onRecipientCancelRecipientWill: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._instigator = values["instigator"];
      this._recipient = values["recipient"];
      this.expiresOnRound = values["expires_on_round"];
      this._onExpiryInstigatorWill = values["on_expiry_instigator_will"];
      this._onExpiryRecipientWill = values["on_expiry_recipient_will"];
      this._onInstigatorCancelInstigatorWill = values["on_instigator_cancel_instigator_will"];
      this._onInstigatorCancelRecipientWill = values["on_instigator_cancel_recipient_will"];
      this._onRecipientCancelInstigatorWill = values["on_recipient_cancel_instigator_will"];
      this._onRecipientCancelRecipientWill = values["on_recipient_cancel_recipient_will"];
    }
    
    get instigator(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._instigator);
    }
    
    get recipient(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._recipient);
    }
    
    get onExpiryInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onExpiryInstigatorWill);
    }
    
    get onExpiryRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onExpiryRecipientWill);
    }
    
    get onInstigatorCancelInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onInstigatorCancelInstigatorWill);
    }
    
    get onInstigatorCancelRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onInstigatorCancelRecipientWill);
    }
    
    get onRecipientCancelInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onRecipientCancelInstigatorWill);
    }
    
    get onRecipientCancelRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined {
      const collection = <StartPosDiplomacyDealActions.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDealActions.KEY, StartPosDiplomacyDealActions.Entry);
      return collection.find(entry => entry.id === this._onRecipientCancelRecipientWill);
    }
  }
}

export default StartPosDiplomacyDeals;
