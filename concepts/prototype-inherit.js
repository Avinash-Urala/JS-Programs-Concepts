let user = {
    firstName: 'John',
    lastName: 'Smith',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

let admin = {
    isAdmin: true,
    __proto__: user
}

let superAdmin = {
    isSuperAdmin: true,
    __proto__: admin
}

superAdmin.fullName = "Allice Burger"; // setter signature found
console.log(superAdmin.fullName);
console.log(user.fullName);