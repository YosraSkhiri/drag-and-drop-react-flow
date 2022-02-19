import React, {
  useState,
  useRef,
} from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  ReactFlowProvider,
  removeElements,
  addEdge,
} from 'react-flow-renderer';
import { v4 as uuidv4 } from 'uuid';
import {
  TextNode,
  ReplyNode,
} from "../CustomNodes";
import SideNav from '../SideNav';
import CustomControls from "../CustomControls";
import styles from "./BlockBuilder.module.css";
import SubMenu from '../SubMenu';
import Navbar from "../Navbar";

const nodeTypes = {
  TextNode: TextNode,
  ReplyNode: ReplyNode,
};

const containerDimensions = {
  width: "86vw",
  height: "86vh",
};

const BlockBuilder = ({ width, height }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [isExtended, setIsExtended] = useState(true); /** */
  const [showSubMenu, setShowSubMenu] = useState(false);

  const onConnect = (params) => setElements((els) =>
    addEdge(
      {
        ...params,
        style: {
          stroke: "#BFC9E4",
        },
      },
      els
    )
  );

  const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance);
  };

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const removeNode = (nodeId) => {
    setElements((state) => {
      let elems = [...state];
      let newElems = elems.filter((elem) => {
        if (elem?.id  === nodeId) {
          return false;
        } else if (elem?.source  === nodeId || elem?.target  === nodeId) {
          return false;
        } else {
          return elem;
        }
      });
      return newElems;
    });
  };

  const onDrop = (event) => {
    event.preventDefault();
    let nodeId = uuidv4();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    let newNode = {};

    switch (type) {
      case "text":
        newNode = {
          id: nodeId,
          type: "TextNode",
          position,
          data: {
            id: nodeId,
            message: "",
            removeNode,
            updateTextNode,
          },
        };
      break;
      default:
        newNode = {
          id: nodeId,
          type: "ReplyNode",
          position,
          data: {
            id: nodeId,
            time: 0,
            timeUnit: "second",
            removeNode,
            updateReplyNode,
          }
        };
    };

    setElements((es) => es.concat(newNode));
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const expendBlockBuilderView = () => {
    setIsExtended((state) => !state);

    calculateContainerDimensions();
  };

  const expendBlockBuilderViewOnClick = () => {
    if (!isExtended) {
      setIsExtended((state) => !state);
      calculateContainerDimensions();
    }
  }

  const calculateContainerDimensions = () => {
    let style = {
      width: "",
      height: "",
    };

    if (isExtended) {
      style = {
        width: containerDimensions.width,
        height: containerDimensions.height,
      }
      document.body.style.overflow = "hidden";
    } else {
      style = {
        width,
        height,
      }

      document.body.style.overflowY = "scroll";
    }
    return style;
  };

  const handleOutsideClick = () => {
    setIsExtended(false);
    calculateContainerDimensions();
  };

  const handlePaneClick = () => {
    expendBlockBuilderViewOnClick()
  };

  const updateReplyNode = (nodeId, time, timeUnit) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === nodeId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          el.data = {
            ...el.data,
            time,
            timeUnit,
          };
        }

        return el;
      })
    );
  };

  const updateTextNode = (nodeId, text) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === nodeId) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          el.data = {
            ...el.data,
            message: text
          };
        }

        return el;
      })
    );
  };

  const generateSubMenu = () => {
    if (showSubMenu) {
      return <SubMenu menuType={showSubMenu} />
    }

    return null;
  };

  const handleSubMenuBtnClick = (type, isClicked) => {
    if (isClicked) {
      setShowSubMenu(type)
    } else {
      setShowSubMenu(false);
    }
  };

  if (width && height) {
    return (
      <>
        <div className={isExtended ? styles.BlockBuilderWrapperModal : styles.BlockBuilderWrapper}>
          <ReactFlowProvider>
            <div
              style={{ height: isExtended ? containerDimensions.height : height }}
              className={styles.BlockBuilderContainer}
            >
              {
                isExtended ? (
                  <>
                    
                    <SideNav handleBtnClick={handleSubMenuBtnClick} />
                    {
                      generateSubMenu()
                    }
                    <Navbar elements={elements} />
                    <div className={styles.dragSpace}></div>
                  </>
                ) : null
              }
              
              <div
                style={calculateContainerDimensions()}
                className={styles.BlockBuilderReactFlowContainer}
                ref={reactFlowWrapper}
              >
                <ReactFlow
                  elements={elements}
                  nodeTypes={nodeTypes}
                  onLoad={onLoad}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onElementsRemove={onElementsRemove}
                  onConnect={onConnect}
                  onPaneClick={handlePaneClick}
                  connectionMode="loose"
                  zoomOnDoubleClick={false}
                >
                  <MiniMap
                    nodeStrokeWidth={0}
                    nodeBorderRadius={40}
                    nodeColor="#e9ebf3"
                    style={{
                      right: 86,
                    }}
                  />
                  <Background
                    variant="dots"
                    color="#c6cedb"
                    gap={20}
                    size={0.8}
                    style={{
                      backgroundColor: "#f2f4f7",
                    }}
                  />
                  {
                    isExtended ? (
                      <>
                        <Controls
                          showInteractive={false}
                          showFitView={false}
                          showZoom={false}
                          style={{
                            left: "100%",
                            boxShadow: "none",
                            transform: "translateX(-150%)",
                          }}
                        >
                          <CustomControls
                            reactFlowInstance={reactFlowInstance}
                            expendBlockBuilderView={expendBlockBuilderView}
                          />
                        </Controls>
                      </>
                    ) : null
                  }
                  
                </ReactFlow>
              </div>
            </div>
          </ReactFlowProvider>
        </div>
        <div onClick={handleOutsideClick} className={styles.BlockBuilderBg} style={isExtended ? { display: "block" } : { display: "none" }}></div>
      </>
    );
  }

  return null;
}

export default BlockBuilder;