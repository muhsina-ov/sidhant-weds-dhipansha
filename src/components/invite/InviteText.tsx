const garland = "https://media.invitestory.in/rajwada-royale-alt/src/assets/garland.png";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function InviteText() {
  const { families, invitationNote, couple } = invitation;

  return (
    <section className="relative px-5 py-12">
      <img
        src={garland}
        alt=""
        aria-hidden
        width={1600}
        height={544}
        loading="lazy"
        className="mx-auto mb-8 w-full max-w-sm opacity-90"
      />
      <Reveal className="mx-auto max-w-lg text-center">
        {/* Groom details */}
        <div className="space-y-1">
          <p className="font-kicker text-gold text-[0.68rem] tracking-[0.3em] uppercase">Groom</p>
          <h3 className="font-script text-maroon text-4xl sm:text-5xl mt-1">{families.groomSide.name}</h3>
          <p className="font-body text-ink/80 text-sm sm:text-base mt-2">{families.groomSide.parentRelation}</p>
          <p className="font-body text-ink/60 text-xs sm:text-sm italic max-w-sm sm:max-w-md mx-auto leading-relaxed px-2">{families.groomSide.relation}</p>
        </div>

        <div className="my-6 flex items-center justify-center gap-3">
          <span className="via-gold/50 h-px w-16 bg-gradient-to-r from-transparent to-transparent" />
          <span className="font-script text-gold text-2xl italic">weds</span>
          <span className="via-gold/50 h-px w-16 bg-gradient-to-r from-transparent to-transparent" />
        </div>

        {/* Bride details */}
        <div className="space-y-1">
          <p className="font-kicker text-gold text-[0.68rem] tracking-[0.3em] uppercase">Bride</p>
          <h3 className="font-script text-maroon text-4xl sm:text-5xl mt-1">{families.brideSide.name}</h3>
          <p className="font-body text-ink/80 text-sm sm:text-base mt-2">{families.brideSide.parentRelation}</p>
          <p className="font-body text-ink/60 text-xs sm:text-sm italic max-w-sm sm:max-w-md mx-auto leading-relaxed px-2">{families.brideSide.relation}</p>
        </div>

        <div className="border-gold/30 bg-paper/60 mt-10 rounded-3xl border px-6 py-6 shadow-[0_10px_30px_-20px_var(--shadow-gold)] backdrop-blur-sm">
          <p className="font-body text-ink/75 text-sm leading-7">{invitationNote}</p>
          <p className="font-kicker text-gold mt-4 text-[0.65rem] tracking-[0.3em] uppercase">
            {couple.hashtag}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
