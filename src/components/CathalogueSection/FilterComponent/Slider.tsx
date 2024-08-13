import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from '@chakra-ui/slider'
import { useState } from 'react';

interface IRangeSlider {
  value: {min: number, max: number}
  onChange: (val: number[]) => void
}

export const Slider = ({value, onChange} : IRangeSlider) => {
  const [valueNow, setValueNow] = useState(value)
  const [isVisible, setIsVisible] = useState(false)


  const handleValChange = (val: number[]) => {
    onChange(val)
    setValueNow({ min: val[0], max: val[1]});
  }

  

  return (
    <RangeSlider
      aria-label={[`min`, `max`]}
      defaultValue={[value.min, value.max]}
      min={0}
      max={26000}
      step={100}
      value={[value.min, value.max]}
      onChange={(val) => { setIsVisible(false); handleValChange(val) }}
      //onChangeEnd={() => { setIsVisible(false)}}
      
    >
      {isVisible && <RangeSliderMark
          value={value.min}
          textAlign='center'
          bg='grey.500'
          color='black'
          mt='-10'
          ml='-5'
          w='15'
        >
          {value.min}&#8381;
      </RangeSliderMark>}
      {isVisible && <RangeSliderMark
          value={value.max}
          textAlign='center'
          bg='grey.500'
          color='black'
          mt='-10'
          ml='-5'
          w='15'
        >
          {value.max}&#8381;  
      </RangeSliderMark>}
      <RangeSliderTrack bg='#b2b5b4'>
        <RangeSliderFilledTrack bg='#32353c'/>
      </RangeSliderTrack>
      <RangeSliderThumb aria-valuenow={valueNow.min} bg='#42494b' index={0} />
      <RangeSliderThumb aria-valuenow={valueNow.max} bg='#42494b' index={1} />
    </RangeSlider>
    )
}