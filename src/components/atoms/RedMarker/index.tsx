import styled from "styled-components";

const styles = {
  RedMarker: styled.pre`
    color: red;
  `,
};

/**
 * 빨간색 필수 마커
 */
const RedMarker = () => {
  return <styles.RedMarker>*</styles.RedMarker>;
};

export default RedMarker;
