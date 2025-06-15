import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function AddStudentModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = () => {
    // For now, just log it
    console.log({ name, class: className, rollNo: Number(rollNo) });
    setOpen(false);
    setName("");
    setClassName("");
    setRollNo("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Student</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label>Class</Label>
            <Input
              placeholder="e.g., 10A"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
          <div>
            <Label>Roll No.</Label>
            <Input
              type="number"
              placeholder="Enter roll number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
