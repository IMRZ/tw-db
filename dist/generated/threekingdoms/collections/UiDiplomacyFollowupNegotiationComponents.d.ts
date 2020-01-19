import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities } from "./UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities";
export declare namespace UiDiplomacyFollowupNegotiationComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedPanelTitle: string;
        readonly localisedPanelDescription: string;
        readonly localisedCallForAction: string;
        readonly localisedCallForActionButton: string;
        readonly localisedProposersTitle: string;
        readonly localisedRecipientsTitle: string;
        readonly _playerFactionVisibility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get playerFactionVisibility(): UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities.Entry | undefined;
    }
}
export default UiDiplomacyFollowupNegotiationComponents;
