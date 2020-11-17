import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
class activity {
    constructor(
      name,
      detail,
      type,
      farm_id,
      stall_id,
      animal_id,
      alertDate,
      is_routine,
      routineOptions,
      creater_id,
      updatedAt,
      status

    ) {
      this.id = uuidv4();
      this.name = name;
      this.farm_id = farm_id;
      this.cage_id = animal_id;
      this.stall_id = stall_id;
      this.detail = detail;
      this.type = type;
      this.alertDate = alertDate;
      this.creater_id= creater_id;
      this.updatedAt = new Date();
      this.status = status || 'process';//['process','finish','delete']
    }
  }
  
  export default activity;
  