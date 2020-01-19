import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { StartPosDiplomacyDealActions } from "./StartPosDiplomacyDealActions";
export declare namespace StartPosDiplomacyDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get instigator(): StartPosFactions.Entry | undefined;
        get recipient(): StartPosFactions.Entry | undefined;
        get onExpiryInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined;
        get onExpiryRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined;
        get onInstigatorCancelInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined;
        get onInstigatorCancelRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined;
        get onRecipientCancelInstigatorWill(): StartPosDiplomacyDealActions.Entry | undefined;
        get onRecipientCancelRecipientWill(): StartPosDiplomacyDealActions.Entry | undefined;
    }
}
export default StartPosDiplomacyDeals;
