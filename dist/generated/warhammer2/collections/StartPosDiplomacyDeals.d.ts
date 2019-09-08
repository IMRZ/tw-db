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
        readonly instigator: StartPosFactions.Entry | undefined;
        readonly recipient: StartPosFactions.Entry | undefined;
        readonly onExpiryInstigatorWill: StartPosDiplomacyDealActions.Entry | undefined;
        readonly onExpiryRecipientWill: StartPosDiplomacyDealActions.Entry | undefined;
        readonly onInstigatorCancelInstigatorWill: StartPosDiplomacyDealActions.Entry | undefined;
        readonly onInstigatorCancelRecipientWill: StartPosDiplomacyDealActions.Entry | undefined;
        readonly onRecipientCancelInstigatorWill: StartPosDiplomacyDealActions.Entry | undefined;
        readonly onRecipientCancelRecipientWill: StartPosDiplomacyDealActions.Entry | undefined;
    }
}
export default StartPosDiplomacyDeals;
