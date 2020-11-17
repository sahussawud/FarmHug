class comment {
    constructor(
      id,
      farm_id,
      post_id,
      user_id,
      detail,
      updatedAt
    ) {
      this.id = id;
      this.farm_id = farm_id;
      this.user_id = user_id;
      this.post_id = post_id;
      this.detail = detail;
      this.updatedAt = new Date();
    }
  }
  
  export default comment;
  