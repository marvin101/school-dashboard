import type { FC } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface Student {
  id: number;
  name: string;
  class: string;
  rollNo: number;
}

const mockStudents: Student[] = [
  { id: 1, name: "Aarav Mehta", class: "8A", rollNo: 3 },
  { id: 2, name: "Riya Sharma", class: "9B", rollNo: 7 },
  { id: 3, name: "Kabir Singh", class: "10C", rollNo: 1 },
];

export const StudentTable: FC = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Students</h2>
          <Button>Add Student</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Roll No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Class</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{student.rollNo}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
