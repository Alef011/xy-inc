function getDistance(mylatitude, mylongitude, coordinate_x, coordinate_y) {
  const bestPosition = Math.sqrt(
    (coordinate_x - mylatitude) * (coordinate_x - mylatitude) +
      (coordinate_y - mylongitude) * (coordinate_y - mylongitude)
  );
  return bestPosition;
}

export default getDistance;
