const createUser = ({firstName, lastName, email}) => ({
  firstName,
  lastName,
  email,
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
});

export default createUser;
