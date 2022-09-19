import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);

  if (value !== undefined) {
    console.log(editingValue, "editing");
    const onChange = (event) => setEditingValue(event.target.value);

    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === "Escape") {
        event.target.blur();
      }
    };

    const onBlur = (event) => {
      if (event.target.value.trim() === 0) {
        setEditingValue(value);
      } else {
        setValue(event.target.value);
      }
    };

    return (
      <input
        id="budget"
        type="number"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className="block h-20 pl-6 mt-4 mb-6 text-xl text-orange-500 bg-blue-100 shadow-lg rounded-xl focus:border-orange-500 "
      ></input>
    );
  }
};

export function Budget() {
  // const {user} = useContext(AuthContext);
  const { user, loadUser } = useContext(AuthContext);
  // console.log("hello editing");
  // console.log(context.initialState);
  // context.initialState.user.budget = 3333;
  // console.log(context.initialState);
  const [value, setValue] = useState(user?.budget);
  const [idk, setIdk] = useState(0);
  useEffect(() => {
    console.log("changed", user?.budget);
    if (user?.budget !== undefined) {
      console.log("WORK");
      setValue(user?.budget);
      setIdk(user?.budget);
      console.log(idk);
    }
  }, [user, idk]);

  useEffect(() => {
    loadUser();
    setValue(user?.budget);
  }, []);

  return (
    <div>
      {idk}
      <lable htmlFor="budget" className="m-auto ml-20 text-2xl font-semibold">
        Budget
      </lable>
      {value !== undefined && <InlineEdit value={value} setValue={setValue} />}
    </div>
  );
}
