import { MenuNames } from "./menu-names";
import { ReactComponent as IconMenu01 } from "../styles/assets/svg/icon_menu_01.svg";
import { ReactComponent as IconMenu02 } from "../styles/assets/svg/icon_menu_02.svg";
import { ReactComponent as IconMenu03 } from "../styles/assets/svg/icon_menu_03.svg";
import { ReactComponent as IconMenu04 } from "../styles/assets/svg/icon_menu_04.svg";
import { ReactComponent as IconMenu05 } from "../styles/assets/svg/icon_menu_05.svg";
import { ReactComponent as IconMenu06 } from "../styles/assets/svg/icon_menu_06.svg";

export const MenuPermissions = [
  { name: MenuNames.MAIN_VIEW, depth: 1, order: 1 },
  { name: MenuNames.EQUIPMENT_MONITORING, depth: 1, order: 2 },
  { name: MenuNames.EQUIPMENT_ALL, depth: 2, order: 3 },
  { name: MenuNames.GENERATOR_01, depth: 2, order: 5 },
  { name: MenuNames.GENERATOR_02, depth: 2, order: 6 },
  { name: MenuNames.GENERATOR_03, depth: 2, order: 7 },
  { name: MenuNames.GENERATOR_04, depth: 2, order: 8 },
  { name: MenuNames.MAINENGINE_01, depth: 2, order: 9 },
  { name: MenuNames.MAINENGINE_02, depth: 2, order: 10 },
  { name: MenuNames.MAINENGINE_03, depth: 2, order: 11 },
  { name: MenuNames.MAINENGINE_04, depth: 2, order: 12 },
  { name: MenuNames.DATA_ANALYSIS, depth: 1, order: 18 },
  { name: MenuNames.TREND_ANALYSIS, depth: 2, order: 19 },
  { name: MenuNames.SENSOR_DATA_VIEW, depth: 2, order: 20 },
  { name: MenuNames.DATA_INTEGRATION_MANAGEMENT, depth: 1, order: 21 },
  { name: MenuNames.DATA_MANAGEMENT, depth: 2, order: 22 },
  { name: MenuNames.TRANSMISSION_RECEPTION_MONITORING, depth: 3, order: 23 },
  // { name: MenuNames.DATA_LOG, depth: 3, order: 24 },
  { name: MenuNames.DB_MANAGEMENT, depth: 2, order: 25 },
  { name: MenuNames.STORAGE_MANAGEMENT, depth: 3, order: 26 },
  { name: MenuNames.MAINTENANCE_SUPPORT, depth: 1, order: 27 },
  { name: MenuNames.ALARM_MANAGEMENT, depth: 2, order: 28 },
  { name: MenuNames.STATUS_DIAGNOSIS_ALARM, depth: 3, order: 29 },
  { name: MenuNames.TECH_DOC_MANAGEMENT, depth: 2, order: 32 },
  { name: MenuNames.ADMIN_SETTINGS, depth: 1, order: 33 },
  { name: MenuNames.EQUIPMENT_INFO_MANAGEMENT, depth: 2, order: 34 },
  { name: MenuNames.USER_MANAGEMENT, depth: 2, order: 35 },
  { name: MenuNames.ACCOUNT_MANAGEMENT, depth: 3, order: 36 },
  { name: MenuNames.AUTH_MANAGEMENT, depth: 3, order: 37 },
  { name: MenuNames.ACCESS_LOG_MANAGEMENT, depth: 3, order: 38 },
  { name: MenuNames.DB_BACKUP_SETTING, depth: 3, order: 39 },
];

export const menuList = [
  {
    id: 1,
    title: MenuNames.MAIN_VIEW,
    icon: <IconMenu01 />,
    depth: 1,
    path: "/",
    mainPath: ["/"],
  },
  {
    id: 2,
    title: MenuNames.EQUIPMENT_MONITORING,
    icon: <IconMenu02 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.EQUIPMENT_ALL,
        depth: 2,
        path: "/equipment/all",
        mainPath: ["/equipment/all/*"],
      },
      {
        id: 2,
        title: MenuNames.GENERATOR_01,
        depth: 2,
        path: "/equipment/generator01/0",
        mainPath: ["/equipment/generator01/*"],
      },
      {
        id: 3,
        title: MenuNames.GENERATOR_02,
        depth: 2,
        path: "/equipment/generator02/0",
        mainPath: ["/equipment/generator02/*"],
      },
      {
        id: 4,
        title: MenuNames.GENERATOR_03,
        depth: 2,
        path: "/equipment/generator03/0",
        mainPath: ["/equipment/generator03/*"],
      },
      {
        id: 5,
        title: MenuNames.GENERATOR_04,
        depth: 2,
        path: "/equipment/generator04/0",
        mainPath: ["/equipment/generator04/*"],
      },
      {
        id: 6,
        title: MenuNames.MAINENGINE_01,
        depth: 2,
        path: "/equipment/mainengine01/0",
        mainPath: ["/equipment/mainengine01/*"],
      },
      {
        id: 7,
        title: MenuNames.MAINENGINE_02,
        depth: 2,
        path: "/equipment/mainengine02/0",
        mainPath: ["/equipment/mainengine02/*"],
      },
      {
        id: 8,
        title: MenuNames.MAINENGINE_03,
        depth: 2,
        path: "/equipment/mainengine03/0",
        mainPath: ["/equipment/mainengine03/*"],
      },
      {
        id: 9,
        title: MenuNames.MAINENGINE_04,
        depth: 2,
        path: "/equipment/mainengine04/0",
        mainPath: ["/equipment/mainengine04/*"],
      },
    ],
  },
  {
    id: 3,
    title: MenuNames.DATA_ANALYSIS,
    icon: <IconMenu03 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.TREND_ANALYSIS,
        depth: 2,
        path: "/analysis/trend",
        mainPath: ["/analysis/trend/*"],
      },
      {
        id: 2,
        title: MenuNames.SENSOR_DATA_VIEW,
        depth: 2,
        path: "/analysis/sensor",
        mainPath: ["/analysis/sensor/*"],
      },
    ],
  },
  {
    id: 4,
    title: MenuNames.DATA_INTEGRATION_MANAGEMENT,
    icon: <IconMenu04 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.DATA_MANAGEMENT,
        depth: 2,
        submenu: [
          {
            id: 1,
            title: MenuNames.TRANSMISSION_RECEPTION_MONITORING,
            depth: 3,
            path: "/data/manage/monitoring",
            mainPath: ["/data/manage/monitoring/*"],
          },
          // {
          //   id: 2,
          //   title: MenuNames.DATA_LOG,
          //   depth: 3,
          //   path: "/data/manage/log",
          // }, // 데이터 로그 페이지 주석
        ],
      },
      {
        id: 2,
        title: MenuNames.DB_MANAGEMENT,
        depth: 2,
        submenu: [
          {
            id: 1,
            title: MenuNames.STORAGE_MANAGEMENT,
            depth: 3,
            path: "/data/db/drive",
            mainPath: ["/data/db/drive/*"],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: MenuNames.MAINTENANCE_SUPPORT,
    icon: <IconMenu05 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.ALARM_MANAGEMENT,
        depth: 2,
        submenu: [
          {
            id: 1,
            title: MenuNames.STATUS_DIAGNOSIS_ALARM,
            depth: 3,
            path: "/support/alarm/status",
            mainPath: ["/support/alarm/status/*"],
          },
        ],
      },
      {
        id: 3,
        title: MenuNames.TECH_DOC_MANAGEMENT,
        depth: 2,
        path: "/support/tech-doc",
        mainPath: ["/support/tech-doc/*"],
      },
    ],
  },
  {
    id: 6,
    title: MenuNames.ADMIN_SETTINGS,
    icon: <IconMenu06 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.EQUIPMENT_INFO_MANAGEMENT,
        depth: 2,
        path: "/setting/equipment-info",
        mainPath: ["/setting/equipment-info/*"],
      },
      {
        id: 2,
        title: MenuNames.USER_MANAGEMENT,
        depth: 2,
        submenu: [
          {
            id: 1,
            title: MenuNames.ACCOUNT_MANAGEMENT,
            depth: 3,
            path: "/setting/user/account",
            mainPath: ["/setting/user/account/*"],
          },
          {
            id: 2,
            title: MenuNames.AUTH_MANAGEMENT,
            depth: 3,
            path: "/setting/user/auth",
            mainPath: ["/setting/user/auth/*"],
          },
          {
            id: 3,
            title: MenuNames.ACCESS_LOG_MANAGEMENT,
            depth: 3,
            path: "/setting/user/access-log",
            mainPath: ["/setting/user/access-log/*"],
          },
          {
            id: 4,
            title: MenuNames.DB_BACKUP_SETTING,
            depth: 3,
            path: "/setting/user/backup",
            mainPath: ["/setting/user/backup/*"],
          },
        ],
      },
    ],
  },
];

export const tabList = [
  {
    id: 1,
    title: "계통1",
    depth: 1,
    submenu: [
      {
        id: 1,
        title: "센서1",
        depth: 2,
      },
      {
        id: 2,
        title: "센서2",
        depth: 2,
      },
      {
        id: 3,
        title: "센서3",
        depth: 2,
      },
      {
        id: 4,
        title: "센서4",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
    ],
  },
  {
    id: 2,
    title: "계통2",
    depth: 1,
    submenu: [
      {
        id: 1,
        title: "센서1",
        depth: 2,
      },
      {
        id: 2,
        title: "센서2",
        depth: 2,
      },
      {
        id: 3,
        title: "센서3",
        depth: 2,
      },
      {
        id: 4,
        title: "센서4",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
    ],
  },
  {
    id: 3,
    title: "계통3",
    depth: 1,
    submenu: [
      {
        id: 1,
        title: "센서1",
        depth: 2,
      },
      {
        id: 2,
        title: "센서2",
        depth: 2,
      },
      {
        id: 3,
        title: "센서3",
        depth: 2,
      },
      {
        id: 4,
        title: "센서4",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
    ],
  },
  {
    id: 4,
    title: "계통4",
    depth: 1,
    submenu: [
      {
        id: 1,
        title: "센서1",
        depth: 2,
      },
      {
        id: 2,
        title: "센서2",
        depth: 2,
      },
      {
        id: 3,
        title: "센서3",
        depth: 2,
      },
      {
        id: 4,
        title: "센서4",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
    ],
  },
  {
    id: 5,
    title: "계통5",
    depth: 1,
    submenu: [
      {
        id: 1,
        title: "센서1",
        depth: 2,
      },
      {
        id: 2,
        title: "센서2",
        depth: 2,
      },
      {
        id: 3,
        title: "센서3",
        depth: 2,
      },
      {
        id: 4,
        title: "센서4",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
      {
        id: 5,
        title: "센서5",
        depth: 2,
      },
    ],
  },
];
