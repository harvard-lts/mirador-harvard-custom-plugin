import Mirador from "mirador/dist/es/src/index";
import Plugin from "../src/index";

document.addEventListener("DOMContentLoaded", () => {
  const config = {
    id: "mirador",
    windows: [
      {
        // manifestId: "https://iiif.lib.harvard.edu/manifests/drs:4997399",
        manifestId: "https://nrs.harvard.edu/URN-3:DIV.LIB:29999858:MANIFEST:3",
      },
    ],
  };

  const plugins = [...Plugin];

  Mirador.viewer(config, plugins);
});
