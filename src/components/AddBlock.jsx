const AddBlock = (props) => {
  return (
    <div className="w-[17rem] h-[20rem] shadow-gray-500 shadow-lg bg-white ml-[4rem] mt-[3rem] mb-4">
      <div className="p-4">
        <p className="font-bold text-[1rem]">Add Block</p>
        <p className="text-[0.8rem] text-[#a4aab4]">
          Keep trying to filter, or escape to exit
        </p>
        <p className="text-[#8a8c90] mt-3 text-[1rem]">
          Filtering Keyword
          <span className="bg-[#3b6aac] py-1 px-1 text-white rounded-sm text-sm ml-2">
            1
          </span>
        </p>
      </div>
      <div>
        <button
          className="p-3 flex w-full items-center justify-start bg-[#a4aab45e]"
          type="button"
          onClick={() => props.callback(false)}
        >
          <div className="font-serif text-[2rem] text-[#a4aab4] basis-[20%]">
            T
          </div>
          <div>
            <p className="text-left font-semibold text-[1rem]">Heading 1</p>
            <p className="text-sm text-[#8a8c90]">Shortcut: type # + space</p>
          </div>
        </button>
        <button
          className="p-3 flex w-full items-center justify-start"
          type="button"
          onClick={() => props.callback(false)}
        >
          <div className="font-serif text-[2rem] text-[#a4aab4] basis-[20%]">
            T
          </div>
          <div>
            <p className="text-left font-semibold text-[1rem]">
              Expendable Heading 1
            </p>
            <p className="text-sm text-[#8a8c90]">
              Shortcut: type{'>'}
              {'>'} # + space
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddBlock;
