import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import logo from "../styles/assets/images/logo-navbar.svg";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'XML Builder',
    brandUrl: 'https://project-openubl.github.io/',
    brandImage: logo
  }
});
