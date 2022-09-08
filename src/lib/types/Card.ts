export interface ICard {
    title: string;
    description: string;
    tags: string[];
}

export class Card {
    title: string;
    description: string;
    tags: Set<string>;
    searchTitle: string;

    constructor(title: string, description: string, tags: Set<string>) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.searchTitle = title.toLowerCase();
    }

    matches(matchString: string): boolean {
        return this.searchTitle.includes(matchString);
    }

    static fromJson(data: ICard): Card {
        return new Card(
            data.title,
            data.description,
            new Set(data.tags)
        );
    }
}
