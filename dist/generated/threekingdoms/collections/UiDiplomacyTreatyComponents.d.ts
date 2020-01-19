import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyCategories } from "./UiDiplomacyCategories";
import { UiDiplomacyInputTypes } from "./UiDiplomacyInputTypes";
import { UiDiplomacyTreatyComponentZoomStyles } from "./UiDiplomacyTreatyComponentZoomStyles";
export declare namespace UiDiplomacyTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedTooltip: string;
        readonly iconPath: string;
        readonly _uiDiplomacyCategory: string;
        readonly sortOrder: number;
        readonly _inputType: string;
        readonly localisedAction: string;
        readonly localisedProposerString: string;
        readonly localisedRecipientString: string;
        readonly localisedActiveProposerString: string;
        readonly localisedActiveRecipientString: string;
        readonly localisedEventFeedHeader: string;
        readonly localisedEventFeedSubheader: string;
        readonly _zoomStyle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get uiDiplomacyCategory(): UiDiplomacyCategories.Entry | undefined;
        get inputType(): UiDiplomacyInputTypes.Entry | undefined;
        get zoomStyle(): UiDiplomacyTreatyComponentZoomStyles.Entry | undefined;
    }
}
export default UiDiplomacyTreatyComponents;
