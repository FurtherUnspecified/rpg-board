import { Card, type ICard } from "$lib/types/Card";

const rawData: ICard[] = [
    {
        title: "Sample1",
        description: "Never gonna give you up",
        tags: ["first"]
    },
    {
        title: "Sample1",
        description: "Never gonna let you down",
        tags: ["second"]
    },
    {
        title: "Sample1",
        description: "Never gonna sell a duck",
        tags: ["first", "second"]
    },
];

export class CardDataSource {
    retrieveCards(): Card[] {
        return rawData.map((rawCard) => Card.fromJson(rawCard));
    }
}
