class farm {
    constructor(
      id,
      name,
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
      this.id = id;
      this.name = name;
      this.distance = distance;
      this.address = address;
      this.imgUrl = imgUrl;
      this.area = area;
      //location = { latitude, longitude }
      this.type = type;
      this.location = location;
      this.createdAt = createdAt;
      this.capacity = capacity;
      this.cow = cow;
    }
  }
  
  export default farm;
  