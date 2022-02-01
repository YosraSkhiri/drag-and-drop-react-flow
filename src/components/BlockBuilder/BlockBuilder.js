import React, {
  useState,
  useRef,
  useEffect,
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
import CustomNode from '../CustomNode';
import SideNav from '../SideNav';
import CustomControls from "../CustomControls";
import CommentsSidebar from '../CommentsSidebar';
import styles from "./BlockBuilder.module.css";

const nodeTypes = {
  CustomNode: CustomNode,
};

const containerDimensions = {
  width: "86vw",
  height: "86vh",
};

const BlockBuilder = ({ width, height }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [isExtended, setIsExtended] = useState(false);
  const [showCommentsSidebar, setShowCommentsSidebar] = useState(false);

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

  const onDrop = (event) => {
    event.preventDefault();
    let data;
    let nodeId = uuidv4();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    if (type === "baloon") {
      data = {
        id: nodeId,
        label: 'Baloon',
        icon: <svg viewBox="0 0 60 54" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M30 50.9998C15.09 50.9998 3 40.2539 3 26.9999C3 13.746 15.09 3 30 3C44.91 3 57 13.746 57 26.9999C57 31.7219 55.464 36.1259 52.815 39.8399L57 50.9998L42.765 48.1528C38.7756 50.0421 34.4141 51.0149 30 50.9998Z" />
        </svg>,
        backgroundColor: "#5121ed",
        showComments,
      }
    }

    if (type === "shoutout") {
      data = {
        id: nodeId,
        label: 'Shoutout',
        icon: <svg viewBox="0 0 60 60" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M24.6 49.8L24.6 3M35.4 57V10.2M13.8 42.6L13.8 17.4M46.2 42.6V17.4M57 31.5V27.9M3 31.5V27.9" />
        </svg>,
        backgroundColor: "#34caa5",
        showComments,
      }
    }

    const newNode = {
      id: nodeId,
      type: "CustomNode",
      position,
      data,
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
    console.log("jjj")
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

  const showComments = () => {
    setShowCommentsSidebar(true);
    setIsExtended(true);
    calculateContainerDimensions();
  };

  const handleOutsideClick = () => {
    setShowCommentsSidebar(false);
    setIsExtended(false);
    calculateContainerDimensions();
  };

  const handlePaneClick = () => {
    expendBlockBuilderViewOnClick()
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
                    <SideNav />
                    <CommentsSidebar
                      showCommentsSidebar={showCommentsSidebar}
                      setShowCommentsSidebar={setShowCommentsSidebar}
                    />
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