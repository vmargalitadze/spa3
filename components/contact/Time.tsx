"use client";
import db from "@/db/time.json";
import React, { useState } from "react";

type FormInputProps = {
  name: string;
  type?: string;
};

function Time(props: FormInputProps) {
  const [selectedTime, setSelectedTime] = useState("12-am");

  const handleTimeChange = async (id: string) => {
    // Find the selected time slot
    const selectedSlot = db.time.find((slot) => slot.id === id);

    if (!selectedSlot) {
      alert("Invalid time slot selected");
      return;
    }

    // Check if the slot is available (booked < 2)
    if (parseInt(selectedSlot.booked) < 2) {
      // Increment the booked value (as a string)
      selectedSlot.booked = (parseInt(selectedSlot.booked) + 1).toString();

      // Update the selected time in state
      setSelectedTime(id);

      // Optionally, update the database or state with the new booked count
    } else {
      alert("This time slot is fully booked. Please select another slot.");
    }
  };

  return (
    <div className="p-4 pt-0">
      <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
        Pick your time
      </label>
      <ul id="timetable" className="grid w-full grid-cols-3 gap-2 mb-5">
        {db.time.map((time) => (
          <li key={time.id}>
            <input
              type="radio"
              id={time.id}
              name="time"
              value={time.label}
              checked={selectedTime === time.id}
              onChange={() => handleTimeChange(time.id)}
              disabled={parseInt(time.booked) >= 2} // Disable if booked count >= 2
              className="hidden peer"
            />
            <label
              htmlFor={time.id}
              aria-label={time.label}
              className={`inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 ${
                parseInt(time.booked) >= 2
                  ? "cursor-not-allowed opacity-50"
                  : "peer-checked:border-blue-700 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
              }`}
            >
              {time.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Time;
