class Group {
    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    static from(newObject) {

        let newGroup = new Group;

        newObject.forEach(element => {
            newGroup.add(element);
        });

        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false