type Collection<T> = {
    content: T[]
}
type Card ={
    title: string;
}

const collection: Collection<Card> = {
    content: [{
        title:"card1"
    },{
        title:"card2"
    }]
}

const collection2: Collection<string> = {
    content: ["card1", "card2"]
}