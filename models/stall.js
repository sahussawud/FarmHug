class stall {
    constructor(
      id,
      name,
      farm_id,
      currentAnimal,
      maximumAnimal,
      food,
      water,
      manure,
      updatedAt,
      area
    ) {
      this.id = id;
      this.name = name;
      this.farm_id = farm_id;
      this.currentAnimal = currentAnimal;
      this.maximumAnimal = maximumAnimal;
      this.food = food || 0;
      this.water = water || 0;
      this.manure = manure || 0;
      this.updatedAt = new Date();
      this.area = area
    }
  }
  
  export default stall;
  