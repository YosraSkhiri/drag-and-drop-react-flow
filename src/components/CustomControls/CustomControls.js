import React, {
  useState,
  useCallback,
} from 'react';
import { animate } from 'popmotion';
import CustomControlBtn from './CustomControlBtn';
import styles from "./CustomControlBtn.module.css";

const CustomControls = ({reactFlowInstance, expendBlockBuilderView}) => {
  const [fullscreenIconClicked, setFullscreenIconClicked] = useState(false);

  const handleZoom = useCallback(
    (ratio) => () => {
      const { zoom } = reactFlowInstance.toObject();

      animate({
        from: zoom,
        to: zoom * ratio,
        onUpdate: (nextZoom) => reactFlowInstance.zoomTo(nextZoom),
      });
    },
    [reactFlowInstance]
  );

  const handleTransform = useCallback(
    (transform) => () => {
      const {
        position: [x, y],
        zoom,
      } = reactFlowInstance.toObject();

      animate({
        from: { x: x, y: y, zoom },
        to: transform,
        onUpdate: ({ x, y, zoom }) => reactFlowInstance.setTransform({ x, y, zoom }),
      });
    },
    [reactFlowInstance]
  );

  const handleContainerSize = () => {
    expendBlockBuilderView();
    setFullscreenIconClicked((state) => !state);
  }

  return (
    <>
      <CustomControlBtn callback={handleContainerSize} type="round">
        {
          fullscreenIconClicked ? (
            <svg title="Collapse file preview" aria-label="Collapse file preview" role="img" width="18" height="18" viewBox="0 0 18 18">
              <path d="M12.465 4.836l.01-.018L15.65 1.65l.707.707-3.196 3.196-.754.45h3.597v1h-5v-5h1V5.67l.46-.834h.001zm-6.922 8.335l-.01.018-3.176 3.168-.707-.707 3.196-3.196.754-.45H2.004v-1h5v5h-1v-3.667l-.461.835v-.001z" fillRule="nonzero" fillOpacity="1" fill="#FFF" stroke="none" />
            </svg>
          ) : (
            <svg title="Expand file preview" aria-label="Expand file preview" role="img" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.54 4.168l-3.187 3.186-.708-.708 3.197-3.197.753-.449H11V2h5v5h-1V3.334l-.46.834zM3.46 13.832l3.186-3.186.708.708-3.198 3.197-.752.449H7v1H2v-5h1v3.666l.46-.834z" fillRule="nonzero" fill="#FFF" stroke="none" />
            </svg>
          )
        }
      </CustomControlBtn>
      <CustomControlBtn callback={handleTransform({ x: 0, y: 0, zoom: 1 })} type="round">
        <svg viewBox="0 0 98 97">
          <circle cx="49.5" cy="48.5" r="38.5" strokeWidth="6" />
          <rect x="46" width="6" height="26" rx="3" />
          <rect x="46" y="71" width="6" height="26" rx="3" />
          <rect y="51" width="6" height="26" rx="3" transform="rotate(-90 0 51)" />
          <rect x="72" y="51" width="6" height="26" rx="3" transform="rotate(-90 72 51)" />
          <circle cx="49.5" cy="48.5" r="11.5" fill="#0f203a" />
        </svg>
      </CustomControlBtn>
      <div className={styles.squareBtnsGroup}>
        <CustomControlBtn callback={handleZoom(1.2)} type="square">
          <svg viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/>
          </svg>
        </CustomControlBtn>
        <CustomControlBtn callback={handleZoom(1 / 1.2)} type="square">
          <svg viewBox="0 0 1024 1024">
            <path d="M810.666667 554.666667H213.333333v-85.333334h597.333334v85.333334z" />
          </svg>
        </CustomControlBtn>
      </div>
    </>
  );
}

export default CustomControls;