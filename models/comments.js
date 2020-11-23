import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
class comment {
    constructor(
      id,
      farm_id,
      post_id,
      user_id,
      detail,
      updatedAt,
      createdAt
    ) {
      this.id = uuidv4();
      this.farm_id = farm_id;
      this.user_id = user_id;
      this.post_id = post_id;
      this.detail = detail;
      this.updatedAt = updatedAt;
      this.createdAt = createdAt;
    }
  }
  
  export default comment;
  