import { TailSpin } from "react-loader-spinner";
import { LogoWrapp } from "./Loader.styled";

export const Loader = () => {
  return (
    <LogoWrapp>
      <div>
        <TailSpin
          height="150"
          width="150"
          color="#ff751d"
          ariaLabel="loading-indicator"
        />
      </div>
    </LogoWrapp>
  );
};
export default Loader;
