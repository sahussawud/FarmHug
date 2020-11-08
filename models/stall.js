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
      updatedAt
    ) {
      this.id = id;
      this.name = name;
      this.farm_id = farm_id;
      this.currentAnimal = currentAnimal;
      this.maximumAnimal = maximumAnimal;
      this.food = food;
      this.water = water;
      this.manure = manure;
      this.updatedAt = updatedAt;
    }
  }
  
  export default stall;
  