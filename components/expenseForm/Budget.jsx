import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { budget_btn } from "./constants";

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
  const { user, loadUser } = useContext(AuthContext);

  const [value, setValue] = useState(user?.budget);
  useEffect(() => {
    if (user?.budget !== undefined) {
      setValue(user?.budget);
    }
  }, [user]);

  useEffect(() => {
    loadUser();
    setValue(user?.budget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <lable
        htmlFor="budget"
        className="m-auto ml-20 text-2xl font-semibold dark:text-slate-300"
      >
        {budget_btn}
      </lable>
      {value !== undefined && <InlineEdit value={value} setValue={setValue} />}

      <p className="absolute text-xl text-orange-500 bottom-12 left-3">$</p>
    </div>
  );
}
