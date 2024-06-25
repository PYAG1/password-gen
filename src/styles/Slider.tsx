import styled from "styled-components";
import { SliderProps } from "../types.ts/index.ts";

export const CharacterSlider = styled.input.attrs(props => ({
    type: 'range',
    max: props.max,
    min: props.min,
    value: props.value
  }))<SliderProps>`
    -webkit-appearance: none;
    margin-right: 15px;
    width: 100%;
    height: 7px;
    margin: 2rem 0;
    background: hsl(248, 15%, 11%);
    background-image: linear-gradient(hsl(127, 100%, 82%), hsl(127, 100%, 82%));
    background-size: ${props => (props.value - props.min) / (props.max - props.min) * 100}% 100%;
    background-repeat: no-repeat;
  
  
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 28px;
      width: 28px;
      border: 2px solid hsl(252, 11%, 91%);
      border-radius: 50%;
      background-color: hsl(252, 11%, 91%);
      cursor: pointer;
    }
  
    &::-webkit-slider-thumb:hover {
      border: 2px solid hsl(127, 100%, 82%);
      background-color: hsl(248, 15%, 11%);
    }
  
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  
    &::-moz-range-thumb {
      -moz-appearance: none;
      height: 28px;
      width: 28px;
      border: 2px solid hsl(252, 11%, 91%);
      border-radius: 50%;
      background-color: hsl(252, 11%, 91%);
      cursor: pointer;
    }
  
    &::-moz-range-thumb:hover,
    &::-moz-range-thumb:active {
      border: 2px solid hsl(127, 100%, 82%);
      background-color: hsl(248, 15%, 11%);
    }
  `;