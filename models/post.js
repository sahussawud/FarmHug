class post {
    constructor(
      id,
      isPublic,
      farm_id,
      user_id,
      topic,
      detail,
      comments,
      createdAt,
      updatedAt
    ) {
      this.id = id;
      this.farm_id = farm_id;
      this.user_id = user_id;
      this.topic = topic;
      this.detail = detail;
      this.isPublic = isPublic || false;
      this.comments = comments;
      this.createdAt =  new Date();
      this.updatedAt = updatedAt;
    }
  }
  
  export default post;
  