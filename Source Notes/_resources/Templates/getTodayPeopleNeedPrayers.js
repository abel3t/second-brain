const spiritualFamilyPeople = [
  // Family
  "Ba",
  "Mẹ",
  "Quý",
  "Yến",
  "Bà nội",

  // Counselor
  "Anh Trí",
  "Chị Tài",

  // Church
  "Đức Huy",
  "Thái",
  "Lộc (anh)",
  "Xuân",

  "Anh Phúc",
  "Anh Quân",
  "Chị Thuỷ",
  "Chị Nhi",
  "Dương",

  "Anh Hưởng",
  "Chị Huyền",
  "Chị Quyên",
  "Chị Quy",
  "Chị Mai",
  "Chị Trinh",

  "Chị Quỳnh Anh",
  "Chị Hồng",
  "Chị Lý",
  "Anh Việt",
  "Giang",
  "Chị Kiều",

  "Lộc (em)",
  "Thảo",
  "Vinh",
  "Quốc",
  "Hiếu",
  "Tuấn",
  "Vy",
  "Châu",
  "Duy",
  "Hiển",

  // Spiritual Friends
  "Anh Giô-na",
  "Cô Grace",
  "AC Tuấn - Lài",
  "Luân",
  "Anh Phước",
  "Anh Huyền",
  "Rô-mát",
  "Sang",
  "Đức", 
  "Thiện",
  "Anh Thế Anh",

  // Unbelieved Friends
  "Nhật - Hiền",
  "Thảo",

  // Girl friend
  "Thuận",
];

function getTodayPeopleNeedPrayers() {
  const MAX_PEOPLE = 5;
  const MAX_NEED_ASK_PRAYER_REQUEST = 2;
  const NUMBER_OF_PEOPLE = spiritualFamilyPeople.length;
  const peopleNeedPrayerMap = {};
  const peopleNeedAskPrayerRequestsMap = {};

  for (let i = 0; i < MAX_PEOPLE; i++) {
    let randNum = -1;
    do {
      randNum = Math.floor(Math.random() * NUMBER_OF_PEOPLE);
    } while (peopleNeedPrayerMap[randNum]);

    peopleNeedPrayerMap[randNum] = true;
  }

  for (let i = 0; i < MAX_NEED_ASK_PRAYER_REQUEST; i++) {
    let randNum = -1;
    do {
      randNum = Math.floor(Math.random() * MAX_PEOPLE);
    } while (peopleNeedAskPrayerRequestsMap[randNum]);

    peopleNeedAskPrayerRequestsMap[randNum] = true;
  }

  const todayPeopleNeedPrayers = spiritualFamilyPeople.filter(
    (_, index) => peopleNeedPrayerMap[index]
  );

  const todayPeopleNeedAskPrayerRequests = todayPeopleNeedPrayers.map(
    (_, index) => {
      if (peopleNeedAskPrayerRequestsMap[index]) {
        return `${index + 1}. ` + todayPeopleNeedPrayers[index] + " (Ask):\n";
      }

      return `${index + 1}. ` + todayPeopleNeedPrayers[index] + ":\n";
    }
  );

  return todayPeopleNeedAskPrayerRequests.join("\n");
}

module.exports = getTodayPeopleNeedPrayers;
