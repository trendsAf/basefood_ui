import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { pricing } from "../../redux/reducers/pricing/priceSlice";
import { updateField } from "../../redux/reducers/form/formSlice";
import Form1 from "../formFiles/Form1";
import Form2 from "../modals/Form2";
import { toast } from "react-toastify";

const MainForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.pricing);
  const formData = useAppSelector((state) => state.form);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      dispatch(updateField({ field: "duration", value: "30" }));
      try {
        const res = await dispatch(pricing(formData)).unwrap();
        toast.success(res.message);
        console.log("Submission success:", res);
      } catch (err) {
        console.error("Submission failed:", err);
        toast.error("An error occurred while submitting.");
      }
    } else {
      // Reset the duration value when unchecked
      dispatch(updateField({ field: "duration", value: "" }));
    }
  };

  return (
    <form className="flex flex-col gap-4">
      {/* Form1 */}
      <Form1 />

      {/* Form2 */}
      <Form2 />

      {/* Checkbox to trigger API and control the duration */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={isLoading} // Disable during loading
        />
        {/* {isLoading ? "Submitting..." : "Submit with Checkbox"} */}
      </label>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default MainForm;
