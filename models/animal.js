import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
class animal {
    constructor(
      id,
      name,
      type,
      stall_id,
      farm_id,
      gene,
      height,
      weight,
      breed,
      sex,
      dob,
      imageUrl
    ) {
      this.id = uuidv4();
      this.name = name;
      this.type = type;
      this.gene = gene
      this.farm_id = farm_id;
      this.stall_id = stall_id;
      this.height = height;
      this.weight = weight;
      this.breed = breed;
      this.dob = dob;
      this.sex = sex;
      this.imageUrl=imageUrl;
      
    }
  }
  
  export default animal;
  