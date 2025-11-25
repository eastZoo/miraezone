import { MenuNames } from "./menu-names";

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
