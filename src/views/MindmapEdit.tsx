import MindElixir from "mind-elixir";
import { useEffect } from "react";
const MindmapEdit = () => {
  useEffect(() => {
    const mei = new MindElixir({
      el: "#map",
    });
    mei.init(MindElixir.new('Welcome to Mind-elixir!'));
  }, []);
  return (
    <div>
      <div id="map" className=" h-screen"></div>
    </div>
  );
};

export default MindmapEdit;
