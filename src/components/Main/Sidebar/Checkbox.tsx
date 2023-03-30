import checkIcon from './icons/check_icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addProducerName } from '../../../store/slices/filterSlice'
import { RootState } from '../../../store/store'

interface ICheckbox {
  producerName: string
}

const Checkbox = (props: ICheckbox) => {

  const dispatch = useDispatch();
  const producersNames = useSelector((state: RootState) => state.filterSlice.producerName)

  const onClickProducer =  (producerName: string) => {
    dispatch(addProducerName(producerName.toLowerCase()));
  }

  return (
    <label>
      <input 
          type="checkbox" 
          className="checkbox_input"
          name='test'
          onChange={() => onClickProducer(props.producerName)}
      />
      <span className={`checkbox_span ${producersNames.includes(props.producerName.toLowerCase()) ? 'selected_checkbox' : ''}`}
            aria-hidden='true'
      >
        <img src={checkIcon} />
      </span>
      {props.producerName}
    </label>
  )
}

export default Checkbox