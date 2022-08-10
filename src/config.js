import LocalStorageService from "services/LocalStorageService";
import { ADMIN } from "constants/userRoles";
const userRole = LocalStorageService.getUserRole();

const URL =
  userRole === ADMIN
    ? "https://nockadmin.loca.lt"
    : "https://nockclient.loca.lt";

const config = {
  theme: "light",
  i18n: "en", // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  baseURL: URL,
  backendImagePath: "uploads",
};

export default config;
