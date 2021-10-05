import { memo } from "react";
import ASNotDevelop from "@/components/not-develop";

export default memo(function ASNewAlbum() {
  return (
    <header id="new_album">
      {/* <h3>new-album</h3> */}
      <ASNotDevelop />
    </header>
  );
});
