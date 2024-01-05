import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const HambergerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container md:flex hidden">
      <button onClick={toggleMenu}>
        <img
          src="/src/assets/icons/لوگو.png"
          alt=""
          className="w-[100px] md:w-[150px] lg:w-[200px]"
        />
      </button>

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit>
        <div className="menu-content">
          {/* محتوای منو */}
          <ul>
            <li>گزینه 1</li>
            <li>گزینه 2</li>
            <li>گزینه 3</li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default HambergerMenu;
