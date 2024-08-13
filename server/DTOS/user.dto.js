class USERDTO {
  constructor(user) {
    this.id = user?._id;
    this.email = user.email;
    this.name = user.name;
    this.todos = user.todos;
  }
}

export default USERDTO;
