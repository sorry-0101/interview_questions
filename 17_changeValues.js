const data = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
];

function chagne() {
  data?.forEach((itm) => {
      if (itm?.capacity === 7) {
        itm.capacity = "7";
        }
    });
    console.log(data);
}

chagne();
