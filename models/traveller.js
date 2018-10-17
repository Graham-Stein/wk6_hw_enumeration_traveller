const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
// const map1 = array1.map(x => x * 2);
// loop through each journey and push
// the start loc to new array
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
// filter for journeys made by train
// const result = words.filter(word => word.length > 6);
  return this.journeys.filter(journey => journey.transport === "train");
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
// map all the journey distances, sum them and return the total distance
  const listOfDistances = this.journeys.map(journey => journey.distance);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return listOfDistances.reduce(reducer);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
// loop through all the journeys and add the mode of transport
// to an array if it is not already in the array
  let transportArrayUnq = [];
  this.journeys.forEach((journey) => {
    if (!transportArrayUnq.includes(journey.transport)) {
      transportArrayUnq.push(journey.transport);
    };
  });

return transportArrayUnq;
};


module.exports = Traveller;
