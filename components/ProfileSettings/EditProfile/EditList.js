import { useEffect } from "react";
import { useState } from "react";
import Input from "../../common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";

function EditList(props) {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [newItemIsToBeAdded, setNewItemIsToBeAdded] = useState(false);

  const editButtonClickHandler = (id) => {
    if (!itemInput) {
      setItems((prevState) => {
        const newState = [...prevState];
        newState[id].isEdited = true;
        return newState;
      });
      setItemInput(items[id]?.item);
    }
  };

  const cancelButtonClickHandler = (id) => {
    setItems((prevState) => {
      const newState = [...prevState];
      newState[id].isEdited = false;
      return newState;
    });
    setItemInput("");
  };

  const deleteItemHandler = (id) => {
    const finalItems = items
      ?.filter((item) => {
        return item?.id !== id;
      })
      ?.map((item) => {
        return item?.item;
      });
    props?.onEdit(finalItems);
  };

  const saveItemHandler = (id, value) => {
    setItems((prevState) => {
      const newState = [...prevState];
      newState[id].isEdited = false;
      newState[id].item = value;
      return newState;
    });
    setItemInput("");
  };

  const inputChangeHandler = (event) => {
    setItemInput(event.target.value);
  };

  const addItemHandler = (event) => {
    const finalItems = items?.map((item) => {
      return item?.item;
    });
    finalItems.push(itemInput);
    props?.onEdit(finalItems);
    setNewItemIsToBeAdded(false);
    setItemInput("");
  };

  const addButtonClickHandler = () => {
    setNewItemIsToBeAdded(true);
  };

  const listItems = items?.map((item) => {
    return (
      <Card
        key={item?.id}
        id={item?.id}
        className="flex items-center justify-between p-4 text-sm"
      >
        {item?.isEdited ? (
          <Input
            input={{
              id: "",
              type: "text",
              value: itemInput,
              onChange: inputChangeHandler,
            }}
            divClassName="w-[80%] text-sm"
          />
        ) : (
          <p className="">{item?.item}</p>
        )}
        {item?.isEdited ? (
          <div className="flex space-x-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                saveItemHandler(item?.id, itemInput);
              }}
              className="bg-indigo-700 px-4 py-2 rounded-md text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                cancelButtonClickHandler(item?.id);
              }}
              className="bg-red-600 px-4 py-2 rounded-md text-white"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <button
              className="text-gray-500"
              type="button"
              onClick={() => {
                editButtonClickHandler(item?.id);
              }}
            >
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button
              className="text-red-600"
              type="button"
              onClick={() => {
                deleteItemHandler(item?.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        )}
      </Card>
    );
  });

  useEffect(() => {
    setItems(
      props?.items?.map((item, index) => {
        return {
          id: index,
          item: item,
          isEdited: false,
        };
      })
    );
  }, [props?.items]);

  return (
    <div className="space-y-2 text-sm">
      <label className="font-normal text-tertiarygrey-400 font-title text-base">
        {props?.label}
      </label>
      <div className="space-y-3">{listItems}</div>
      {newItemIsToBeAdded && (
        <div className="flex items-center justify-between">
          <Input
            input={{
              id: "",
              type: "text",
              value: itemInput,
              onChange: inputChangeHandler,
            }}
            divClassName="w-[80%] text-sm"
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => {
                addItemHandler(itemInput);
              }}
              className="bg-indigo-700 px-4 py-2 rounded-md text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setNewItemIsToBeAdded(false);
                setItemInput("");
              }}
              className="bg-red-600 px-4 py-2 rounded-md text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={addButtonClickHandler}
        className="bg-indigo-700 px-4 py-2 rounded-md text-white text-sm"
      >
        Add Item
      </button>
    </div>
  );
}

export default EditList;
