import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateField } from "../redux/reducers/form/formSlice";

const Form3 = () => {
  const dispatch = useAppDispatch();
  const { duration } = useAppSelector((state) => state.form);

  const handleChange = (e: any) => {
    dispatch(updateField({ field: "duration", value: e.target.value }));
  };

  return (
    <div>
      <label>Input 3:</label>
      <input
        type="text"
        value={duration}
        onChange={handleChange}
        className="text-black"
      />
    </div>
  );
};

export default Form3;
