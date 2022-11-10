import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag, preview] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <>
      <DragPreviewImage connect={preview} src="https://www.ekuaibao.com/_nuxt/img/norton.baefffc.png" />
      <div className="sideBarItem" ref={drag} style={{ opacity }}>
        {data.component.type}
      </div>
    </>
  );
};
export default SideBarItem;
