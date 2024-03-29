import LoginButton from "./LoginButton";
import { IBM_Plex_Serif } from "next/font/google";

const ibm_plex = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-ibm-plex-serif",
});

export default function LoginCard({
  heading,
  description,
  handleClick,
  login,
}) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-left text-5xl font-semibold leading-9 tracking-tight text-almostBlack font-ibm-plex-serif">
            <em> {heading}</em>
          </h2>
          <p className="mt-10 text-left text-lg tracking-tight text-almostBlack font-ibm-plex-serif">
            {description}
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="sign-in-buttons flex flex-col items-center">
              <div className="px-6 sm:px-0 max-w-sm">
                <LoginButton
                  provider="Google"
                  handleClick={handleClick}
                  login={login}
                ></LoginButton>
                <LoginButton
                  provider="Apple"
                  handleClick={handleClick}
                ></LoginButton>
                <LoginButton provider="Coinbase"></LoginButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
