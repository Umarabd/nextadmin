import React from "react";
import style from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "WebGIS",
    list: [
      {
        title: "Geoserver",
        path: "/dashboard/geoserver",
        icon: <MdDashboard />,
      },
      {
        title: "MapStore",
        path: "/dashboard/mapstore",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "MapBox",
        path: "/dashboard/mapbox",
        icon: <MdSupervisedUserCircle />,
      },

      {
        title: "Kanban",
        path: "/dashboard/kanban",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <Image
          className={style.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={style.userDetail}>
          <span className={style.userName}>Umar Abdurrohman</span>
          <span className={style.userTitle}> RnD</span>
        </div>
      </div>
      <ul className={style.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={style.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink a={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
