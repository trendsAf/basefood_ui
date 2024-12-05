import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateField } from "../../redux/reducers/form/formSlice";

const Form2 = () => {
  const dispatch = useAppDispatch();
  const { country_id } = useAppSelector((state) => state.form);

  const handleChange = (e: any) => {
    dispatch(updateField({ field: "country_id", value: e.target.value }));
  };

  return (
    <div>
      <label>Input 2:</label>
      <input
        type="number"
        value={country_id}
        onChange={handleChange}
        className="text-black"
      />
    </div>
  );
};

export default Form2;
