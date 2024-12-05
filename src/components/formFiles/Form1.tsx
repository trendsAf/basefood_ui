import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateField } from "../../redux/reducers/form/formSlice";

const Form1 = () => {
  const dispatch = useAppDispatch();
  const { crop_id } = useAppSelector((state) => state.form);

  const handleChange = (e: any) => {
    dispatch(updateField({ field: "crop_id", value: e.target.value }));
  };

  return (
    <div>
      <label>Input 1:</label>
      <input
        type="text"
        value={crop_id}
        onChange={handleChange}
        className="text-black"
      />
    </div>
  );
};

export default Form1;
