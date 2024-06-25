
export interface CheckBoxOption {
    id: number;
    text: string;
    onClick?: () => void;
  }
  
  
  
 export  interface SliderProps {
    min: number;
    max: number;
    value: number;
  }