class post {
    constructor(
      id,
      type,
      farm_id,
      user_id,
      topic,
      detail,
      comments,
      updatedAt
    ) {
      this.id = id;
      this.farm_id = farm_id;
      this.user_id = user_id;
      this.topic = topic;
      this.detail = detail;
      this.type = type;
      this.comments = comments;
      this.updatedAt = new Date();
    }
  }
  
  export default post;
  