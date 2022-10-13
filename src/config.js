import LocalStorageService from "services/LocalStorageService";
import { ADMIN } from "constants/userRoles";

const URL = () => {
  return LocalStorageService.getUserRole() === ADMIN
    ? "https://admin.loca.lt"
    : "https://client.loca.lt";
};

const config = {
  theme: "light",
  i18n: "en", // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  baseURL: URL,
  backendImagePath: "uploads",
};

export default config;
