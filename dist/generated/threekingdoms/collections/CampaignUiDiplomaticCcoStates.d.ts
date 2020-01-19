import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
export declare namespace CampaignUiDiplomaticCcoStates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly stateName: string;
        readonly sortOrder: number;
        readonly _colour: string;
        readonly _overlayColour: string;
        readonly localisedTitle: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get colour(): UiColours.Entry | undefined;
        get overlayColour(): UiColours.Entry | undefined;
    }
}
export default CampaignUiDiplomaticCcoStates;
