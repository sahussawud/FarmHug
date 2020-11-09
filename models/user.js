class User {
    constructor(
      id,
      username,
      email,
      password,
      type,
      farm_id,
      firstname,
      lastname,
      line_account,
      imageURL,
      role
    ) {
      this.id = id || '';
      this.username = username || '';
      this.email = email || '';
      this.password = password || '';
      //enum owner, employee
      this.type = type || '';
      this.farm_id = farm_id || '';
      this.firstname = firstname || '';
      this.lastname = lastname || '';
      this.line_account = line_account || '';
      this.imageURL = imageURL || '';
      this.role = role || '';
    }
  }
  
  export default User;
  