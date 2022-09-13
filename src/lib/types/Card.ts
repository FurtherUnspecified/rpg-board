export interface ICard {
    title: string;
    cost: number;
    description: string;
    tags: string[];
}

export class Card {
    title: string;
    cost: number = 0;
    description: string;
    tags: Set<string>;
    searchTitle: string;

    constructor(title: string, cost: number, description: string, tags: Set<string>) {
        this.title = title;
        this.cost = cost;
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
            data.cost,
            data.description,
            new Set(data.tags)
        );
    }
}
