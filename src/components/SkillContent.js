const Frontobj = [
  {
    id: 1,
    lang: "HTML",
    per: 100,
  },
  {
    id: 2,
    lang: "CSS",
    per: 100,
  },
  {
    id: 3,
    lang: "JS",
    per: 100,
  },
  {
    id: 5,
    lang: "React JS",
    per: 90,
  },
  {
    id: 7,
    lang: "Tailwind CSS",
    per: 100,
  },
  {
    id: 8,
    lang: "Material UI",
    per: 60,
  },
];

const Backobj = [
  {
    id: 1,
    lang: "Node JS",
    per: 20,
  },

  {
    id: 3,
    lang: "Express JS",
    per: 15,
  },

  {
    id: 4,
    lang: "Firebase",
    per: 40,
  },
];

const Dataobj = [];

const Otherobj = [
  {
    id: 1,
    lang: "JAVA",
    per: 65,
  },
];

function ObjSort(obj) {
  return obj.sort((i1, i2) => {
    return i2.per - i1.per;
  });
}

export const FrontEnd = ObjSort(Frontobj);
export const BackEnd = ObjSort(Backobj);
export const DataBase = ObjSort(Dataobj);
export const Others = ObjSort(Otherobj);
