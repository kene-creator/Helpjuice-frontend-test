import icons from '../assets/icons.svg';
import styles from './HeadNav.module.css';

const HeadNav = () => {
  return (
    <div className={`flex_between ${styles.nav}`}>
      <div className="flex_center">
        <div>
          <svg className={styles.arrow}>
            <use xlinkHref={`${icons}#icon-angle-double-right`} />
          </svg>
        </div>
        <div className="flex_center">
          <svg className={styles.book_open}>
            <use xlinkHref={`${icons}#icon-book-open`} />
          </svg>
          <div className="flex">
            <a
              href="#"
              className="text-[#a4aab4] ml-2 mr-2 border-b border-[#a4aab4] text-[0.7rem]"
            >
              Main
            </a>
            <span className="text-[#a4aab4] text-[0.7rem]">&#47;</span>
            <p className="text-[#a4aab4] mx-2 text-[0.7rem]">Getting Started</p>
            <span className="text-[#a4aab4] text-[0.7rem]">&#47;</span>
            <p className="text-[#a4aab4] mx-2 text-[0.7rem]">
              Front end development test
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex mr-4">
          <svg className={styles.book_open}>
            <use xlinkHref={`${icons}#icon-lock`} />
          </svg>
          <p className="text-[#a4aab4] mx-2 text-[0.7rem]">Editing</p>
        </div>
        <span className="text-[#a4aab4] text-[1rem]">|</span>
        <div className="flex justify-center items-center">
          <p className="text-[0.9rem] text-[#3b6aac] mx-2 font-semibold">
            Publish Space
          </p>
          <svg className="rotate-[-90deg] w-[1rem] h-[1rem] fill-[#3b6aac]">
            <use xlinkHref={`${icons}#icon-chevron-left11`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
