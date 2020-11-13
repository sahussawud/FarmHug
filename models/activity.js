class activity {
    constructor(
      id,
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

    ) {
      this.id = id;
      this.name = name;
      this.farm_id = farm_id;
      this.cage_id = animal_id;
      this.stall_id = stall_id;
      this.detail = detail;
      this.type = type;
      this.alertDate = alertDate;
      this.creater_id= creater_id;

    }
  }
  
  export default activity;
  