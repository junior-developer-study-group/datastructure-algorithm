function getRoomNum(hopeNum, hotelMap) {
  if (hotelMap.has(hopeNum)) {
    const nextNum = getRoomNum(hotelMap.get(hopeNum), hotelMap);
    hotelMap.set(hopeNum, nextNum + 1);

    return nextNum;
  }

  hotelMap.set(hopeNum, hopeNum + 1);
  return hopeNum;
}

function solution(k, room_number) {
  const rooms = new Map();

  return room_number.map((num) => getRoomNum(num, rooms));
}
