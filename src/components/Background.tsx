import { assets } from "../assets";

export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,212,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,.08) 1px, transparent 1px)`,
          backgroundSize: "44px 44px"
        }}
      />
      <div
        className="absolute inset-0 animate-grid-shift opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(0,245,212,.16), transparent 34%), radial-gradient(circle at 80% 20%, rgba(3,216,255,.1), transparent 28%)"
        }}
      />
      <img
        src={assets.cyberGrid}
        alt=""
        className="absolute inset-x-0 top-0 h-[760px] w-full object-cover opacity-30 mix-blend-screen"
      />
      <img
        src={assets.particles}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,245,212,.08),transparent_32%),linear-gradient(180deg,rgba(5,8,22,.22),#050816_88%)]" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyanova/10 blur-3xl" />
      <div className="absolute -right-32 top-[620px] h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
    </div>
  );
}
