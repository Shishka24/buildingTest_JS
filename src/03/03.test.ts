import { StudentType } from "../02/02";
import { addSKill, changeActive } from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Vlad",
    age: 30,
    isActive: true,
    address: {
      streetTitle: "L'assoption",
      city: {
        title: "Montreal",
        country: "Canada",
      },
    },
    technologies: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JS",
      },
    ],
  };
});
test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSKill(student, "JS");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});
test("The Student finish the study , replace isActive to false", () => {
  expect(student.isActive).toBe(true);
  changeActive(student);
  expect(student.isActive).toBe(false);
});
