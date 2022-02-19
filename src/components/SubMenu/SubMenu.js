import React, {
  useEffect,
  useRef,
} from 'react';
import styles from "./SubMenu.module.css";
import subMenuItems from "./subMenuItems";
import SubNavBtn from "../SubNavBtn/SubNavBtn";

/** Ghost Images */
import textIcon from "../../assets/images/text_icon.png";
import imageIcon from "../../assets/images/image_icon.png";
import videoIcon from "../../assets/images/video_icon.png";
import listIcon from "../../assets/images/list_icon.png";
import galleryIcon from "../../assets/images/gallery_icon.png";
import replyIcon from "../../assets/images/reply_icon.png";
import waitIcon from "../../assets/images/wait_icon.png";

const SubMenu = ({menuType}) => {
  const textIconGhost = useRef();
  const imageIconGhost = useRef();
  const videoIconGhost = useRef();
  const listIconGhost = useRef();
  const galleryIconGhost = useRef();
  const replyIconGhost = useRef();
  const waitIconGhost = useRef();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';

    switch (nodeType) {
      case "text":
        event.dataTransfer.setDragImage(textIconGhost.current, 10, 10);
      break;
      case "image":
        event.dataTransfer.setDragImage(imageIconGhost.current, 10, 10);
      break;
      case "video":
        event.dataTransfer.setDragImage(videoIconGhost.current, 10, 10);
      break;
      case "list":
        event.dataTransfer.setDragImage(listIconGhost.current, 10, 10);
      break;
      case "gallery":
        event.dataTransfer.setDragImage(galleryIconGhost.current, 10, 10);
      break;
      case "reply":
        event.dataTransfer.setDragImage(replyIconGhost.current, 10, 10);
      break;
      case "wait":
        event.dataTransfer.setDragImage(waitIconGhost.current, 10, 10);
      break;

      default: 
        event.dataTransfer.setDragImage(textIconGhost.current, 10, 10);
    }
  };

  useEffect(() => {
    textIconGhost.current = new Image();
    textIconGhost.current.src = textIcon;

    imageIconGhost.current = new Image();
    imageIconGhost.current.src = imageIcon;

    videoIconGhost.current = new Image();
    videoIconGhost.current.src = videoIcon;

    listIconGhost.current = new Image();
    listIconGhost.current.src = listIcon;

    galleryIconGhost.current = new Image();
    galleryIconGhost.current.src = galleryIcon;

    replyIconGhost.current = new Image();
    replyIconGhost.current.src = replyIcon; 

    waitIconGhost.current = new Image();
    waitIconGhost.current.src = waitIcon; 
  }, []);

  const generateMenu = () => {
    let menu = [];
    
    subMenuItems[menuType].forEach((item, index) => {
      menu.push(
        <SubNavBtn
          label={item.label}
          onDragStart={(event) => onDragStart(event, item.node)}
          isDraggable={true}
          key={`sub-menu-node-${index}-${item.label}`}
        >
          {item.icon}
        </SubNavBtn>
      );
    });

    return menu;
  };

  return (
    <nav className={styles.subNav}>
      <div className={styles.subNavContainer}>
        {generateMenu()}
      </div>
    </nav>
  );
}
 
export default SubMenu;