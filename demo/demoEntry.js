import Mirador from "mirador/dist/es/src/index";
import Plugin from "../src/index";

document.addEventListener("DOMContentLoaded", () => {
  const config = {
    id: "mirador",
    windows: [
      {
        manifestId: "https://iiif.lib.harvard.edu/manifests/drs:4997399", // "License"
        // manifestId: "https://nrs.harvard.edu/URN-3:DIV.LIB:29999858:MANIFEST:3", // "Attribution"
        // manifestId: "https://nrs.harvard.edu/URN-3:FHCL.JUD:40308070:MANIFEST:3", // "Provided by"
      },
    ],
  };

  const plugins = [...Plugin];

  Mirador.viewer(config, plugins);
});
