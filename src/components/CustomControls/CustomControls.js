import React, {
  useCallback,
} from 'react';
import { animate } from 'popmotion';
import CustomControlBtn from './CustomControlBtn';
import styles from "./CustomControlBtn.module.css";

const CustomControls = ({reactFlowInstance}) => {
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

  return (
    <>
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