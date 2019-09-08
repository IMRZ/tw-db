import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TechnologyUiGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly colourRed: number;
        readonly colourGreen: number;
        readonly colourBlue: number;
        readonly optionalDisplayName: string;
        readonly optionalDisplayDesctiption: string;
        readonly optionalBackgroundImage: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TechnologyUiGroups;
