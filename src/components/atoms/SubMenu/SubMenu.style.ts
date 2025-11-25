import styled from "styled-components";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi";

export const SubMenuBox = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const SubMenuItem = styled.li`
  position: relative;
  display: inline-block;
`;

export const CustomSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1.4rem;
`;

export const ChevronDown = styled(HiOutlineChevronDown)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #000;
  font-size: 2rem;
`;

export const ChevronRight = styled(HiOutlineChevronRight)`
  margin: 0 10px;
  color: #333;
  font-size: 1.2rem;
`;