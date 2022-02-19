import React from "react";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({list}) => {
  return (
    <ul className={styles.breadcrumbsContainer}>
      {
        list.map((item, index) => (
          <li className={styles.breadcrumbItem} key={`breadcrumb-link-${index}`}>
            <a className={styles.breadcrumbLink} href={item.href}>{item.label}</a>
            {
              index !== list.length - 1 ?
              <svg width="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              : null
            }
          </li>
        ))
      }
    </ul>
  );
}
 
export default Breadcrumbs;