class farm {
    constructor(
      id,
      name,
      description,
      area,
      address,
      imgUrl,
      type,
      location,
      capacity,
      cow,
      distance,
      createdAt
    ) {
      this.id = id|| "";
      this.name = name || "";
      this.description = description || "";
      this.distance = distance|| "";
      this.address = address|| "";
      this.imgUrl = imgUrl|| "";
      this.area = area|| "";
      //location = { latitude, longitude }
      this.type = type|| "";
      this.location = location;
      this.createdAt = createdAt || new Date().toString();
      this.capacity = capacity|| "";
      this.cow = cow || "";
      this.watercheck = 30;
      this.foodConsume = 1;
      this.employee = 1;
    }
  }
  
  export default farm;
  