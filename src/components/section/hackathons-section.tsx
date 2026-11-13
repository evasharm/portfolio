import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function HackathonsSection() {
  return (
    <section id="hackathons">
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-bold">{DATA.sections.hackathons.heading}</h2>
          <p className="text-sm text-muted-foreground">{DATA.sections.hackathons.text}</p>
        </div>

        <div className="flex flex-col gap-8">
          {DATA.hackathons.map((hackathon) => (
            <div key={hackathon.title} className="flex flex-col gap-2">
              <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
              <h3 className="font-semibold leading-none">{hackathon.title}</h3>

              {"win" in hackathon && hackathon.win && (
                <span className="win-badge w-fit">🏆 {hackathon.win}</span>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed">
                {hackathon.description}
              </p>

              {hackathon.links.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {hackathon.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                        {link.title}
                      </Badge>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}