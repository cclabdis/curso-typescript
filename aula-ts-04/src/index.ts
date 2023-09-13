function printId(id: number | string): void {
    if (typeof id === "string") { 
        console.log(`Your id is: ${id.toUpperCase()}`); 
    } else{
        console.log(`Your id is: ${id}`);
    }
    //type guard

}

printId(1)