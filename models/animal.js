class animal {
    constructor(
      id,
      name,
      type,
      cage_id,
      farm_id,
      gene,
      height,
      weight,
      breed,
      sex,
      dob,
      imageUrl

    ) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.gene = gene
      this.farm_id = farm_id;
      this.cage_id = cage_id;
      this.height = height;
      this.weight = weight;
      this.breed = breed;
      this.dob = dob;
      this.sex = sex;
      this.imageUrl=imageUrl;
      
    }
  }
  
  export default animal;
  