import { NavLink } from "react-router-dom";

const Links = ({ items, style, onClick}) => {
  return (
    <div className={style}>
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className={({isActive}) => {
            return isActive
              ? "text-[#5D1570] font-[exo] "
              : "text-[#181830] hover:opacity-[0.7] font-[exo] ";
          }}
          onClick={onClick}
        >
          {" "}
          {item.name}{" "}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
