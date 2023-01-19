import { useState } from 'react';
import AddBlock from './AddBlock';

const Textarea = () => {
  const [text, setext] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [placeholder, setPlaceholder] = useState(true);
  const [header, setHeader] = useState('');

  const handleChange = (e) => {
    setext(e.target.value);
    if (e.target.value.includes('/1')) {
      return setOpenModal(true);
    }
    if (e.target.value.includes('') || e.target.value.includes('/')) {
      setOpenModal(false);
    }
  };

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
    if (e.target.value.includes('')) {
      setOpenModal(false);
    }
  };

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="relative bg-white w-[50%] h-[50vh] mx-auto flex justify-center items-center mt-6 textarea_shadow placeholder:text-[1rem] text-lg"
        onChange={placeholder ? handleChange : handleHeaderChange}
        placeholder={`${
          placeholder
            ? 'Type / for blocks, @ to link docs to people'
            : 'Heading 1'
        }`}
        value={!placeholder ? header : text}
      ></textarea>
      <div className="absolute top-[20rem] left-[15rem]">
        {openModal && <AddBlock callback={setPlaceholder} />}
      </div>
    </div>
  );
};

export default Textarea;
