import ParkSlot from './ParkSlot';
class Garages {
  constructor(id, name, parkingAreas) {
    this.id = id;
    this.name = name;
    this.parkingAreas = parkingAreas;
  };

  get parkingAreaInfo() {
    const parkingSlots = [];
    for (const key in this.parkingAreas) {
      parkingSlots.push(new ParkSlot(
        key,
        this.parkingAreas[key].slot,
        this.parkingAreas[key].status
      ));
    }
    return parkingSlots;
  }
};

export default Garages;