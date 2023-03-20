import { useDispatch, useSelector } from 'react-redux';
import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';
import { filterContact } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getFilter);

  const onChangeInput = e => dispatch(filterContact(e.target.value));

  return (
    <FilterWrap>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={inputValue}
          onChange={onChangeInput}
        ></InputFilter>
      </LabelFilter>
    </FilterWrap>
  );
};
