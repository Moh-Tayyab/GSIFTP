let magicians_3: string[] = ["Main Afzal", "M. Yaseen", "Ejaz Mugal", "Shamsher Razzaq"];

function show_magic(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function great_magic(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`${magician} is a great magician in the history of pakistan.`);
    }
    return modified_magicians;
}

let great_magicians: string[] = great_magic(magicians_3.slice());


show_magic(magicians_3);

console.log("\n\t");

show_magic(great_magicians);
