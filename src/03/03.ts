import { StudentType } from "../02/02";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const addSKill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};
export const changeActive = (student: StudentType) => {
  student.isActive = false;
};
