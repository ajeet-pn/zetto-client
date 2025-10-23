
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../redux/reducers/user_reducer";
import { domainName } from "../../config/Auth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const betChipsData = {
  1000: 1000,
  2000: 2000,
  5000: 5000,
  10000: 10000,
  20000: 20000,
  50000: 50000,
  100000: 100000,
  250000: 250000,
};

const EditStack = ({ closeModal }) => {
  const [keyValues1, setKeyValues1] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const betChipsDataItems = JSON.parse(
      localStorage.getItem("clientbetChipsData")
    );
    let betChips = {};
    if (betChipsDataItems != null) {
      betChips = betChipsDataItems;
    } else {
      betChips = betChipsData;
    }

    const updatedKeyValues = Object.entries(betChips).map(([key, value]) => ({
      key,
      value: parseInt(value),
      isEnabled: true,
    }));
    setKeyValues1(updatedKeyValues);
  }, []);

  const handleInputChange = (index, key, value) => {
    const updatedKeyValues = [...keyValues1];
    if (key !== undefined) {
      updatedKeyValues[index].key = key;
    }
    if (value !== undefined) {
      updatedKeyValues[index].value = Number(value);
    }
    setKeyValues1(updatedKeyValues);
  };

  const handleToggleEnable = (index) => {
    const updatedKeyValues = [...keyValues1];
    updatedKeyValues[index].isEnabled = !updatedKeyValues[index].isEnabled;
    setKeyValues1(updatedKeyValues);
  };

  const handleAddRow = () => {
    const updatedKeyValues = [
      ...keyValues1,
      { key: "", value: '', isEnabled: true },
    ];
    setKeyValues1(updatedKeyValues);
  };

  const user = JSON.parse(localStorage.getItem(`user_info_${domainName}`));

  const submitValue = () => {
    const newBetChipsObject = {};
    keyValues1.forEach((item) => {
      if (item.isEnabled && item.key !== "") {
        newBetChipsObject[item.key] = item.value;
      }
    });

    const Id = user?.data?.userId;
    const dataValue = {
      userId: Id,
      betChipsData: newBetChipsObject,
    };

    dispatch(userUpdate(dataValue)).then((res) => {
      if (res?.payload?.error === false) {
        message.success(res?.payload?.message);
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    });

    localStorage.setItem(
      "clientbetChipsData",
      JSON.stringify(newBetChipsObject)
    );
    closeModal();
  };

  return (
      <div className="w-full relative">

        <div className="">
          {/* Add Row Button */}
          <div className="flex justify-end px-4 pt-4">
            <button
              onClick={handleAddRow}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded"
            >
              + Add Row
            </button>
          </div>

          {/* Table Form */}
          <form autoComplete="off" className="p-4 border-t border-white">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Value</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {keyValues1.map((item, index) => (
                  <tr key={index} className={item.isEnabled ? "" : "bg-gray-700 opacity-60"}>
                    <td className="px-4 py-2 border">
                      <input
                        type="text"
                        value={item.key}
                        disabled={!item.isEnabled}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value, undefined)
                        }
                        className="w-full p-1 border bg-white rounded text-sm"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        value={item.value}
                        disabled={!item.isEnabled}
                        onChange={(e) =>
                          handleInputChange(index, undefined, e.target.value)
                        }
                        className="w-full p-1 border bg-white rounded text-sm"
                      />
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleEnable(index)}
                        className={`text-xs px-3 py-1 rounded font-semibold text-white ${
                          item.isEnabled
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        {item.isEnabled ? "Disable" : "Enable"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>

          {/* Submit Button */}
          <div className="px-4 py-2 flex items-center justify-end gap-2">
            <span
              onClick={submitValue}
              className="block text-xs font-bold py-2 px-4 w-full rounded-md text-center focus:outline-none hover:opacity-100 transition-opacity bg-green-600 text-white cursor-pointer"
            >
              Submit
            </span>
          </div>
        </div>
      </div>
    
  );
};

export default EditStack;
