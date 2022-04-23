import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const ListItem = () => {
  const [itemStatus, setItemStatus] = useState(false);

  // Change checkbox status with double click
  const handleCheck = () => {
    return setItemStatus(!itemStatus);
  };

  return (
    <ul>
      <li onDoubleClick={handleCheck}>
        <input
          type="checkbox"
          name="item"
          id="item"
          checked={itemStatus}
          onChange={handleCheck}
        />
        <div className="title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
          nobis.
        </div>
        <i>
          <RiDeleteBinLine />
        </i>
      </li>
      <li>
        <input type="checkbox" name="item" id="item" />
        <div className="title">Lorem ipsum dolor sit amet.</div>
        <i>
          <RiDeleteBinLine />
        </i>
      </li>
      <li>
        <input type="checkbox" name="item" id="item" />
        <div className="title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nobis
          nihil quo aliquam, ad excepturi dignissimos ea tempora eos id.
        </div>
        <i>
          <RiDeleteBinLine />
        </i>
      </li>
      <li>
        <input type="checkbox" name="item" id="item" />
        <div className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <i>
          <RiDeleteBinLine />
        </i>
      </li>
    </ul>
  );
};

export default ListItem;
