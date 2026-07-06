import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Paperclip, X } from "lucide-react";

// ------------------------------------------------------------------
// CONFIG
// 1. Crea un form su formspree.io e incolla l'ID qui sotto (es. "mqkvabcd").
//    Finche non lo fai, il form gira in DEMO MODE: mostra la schermata di
//    conferma ma le application NON vengono recapitate da nessuna parte.
// 2. L'upload file richiede un piano Formspree a pagamento. Se resti sul
//    piano free, metti ENABLE_FILE_UPLOAD a false: l'utente puo comunque
//    incollare un link alla sua proof.
// ------------------------------------------------------------------
const FORMSPREE_ID = "YOUR_FORM_ID";
const ENABLE_FILE_UPLOAD = true;

const MAX_FILE_MB = 5;
const ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg"];
const PITCH_MAX = 300;

type Stage = "Pre-seed" | "Seed";
type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  stage: Stage | "";
  pitch: string;
  traction: string;
  proofLink: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  stage: "",
  pitch: "",
  traction: "",
  proofLink: "",
};

const inputCls =
  "w-full rounded-xl border bg-panel px-4 py-3 text-[15px] text-fg placeholder:text-muted-2 focus:outline-none transition-colors";
const okBorder = "border-line focus:border-[rgba(76,141,255,0.5)]";
const errBorder = "border-[rgba(241,106,122,0.55)] focus:border-[rgba(241,106,122,0.7)]";
const labelCls = "mb-2 block text-[13.5px] font-medium text-muted";

function looksLikeUrl(value: string) {
  try {
    new URL(value.startsWith("http") ? value : `https://${value}`);
    return value.includes(".");
  } catch {
    return false;
  }
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-2 text-[13px] text-rose">{msg}</p>;
}

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const goHome = (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  const onFileChange = (picked: File | null) => {
    setFileError("");
    if (!picked) {
      setFile(null);
      return;
    }
    if (!ACCEPTED_TYPES.includes(picked.type)) {
      setFileError("Only PDF, PNG or JPG files are accepted.");
      setFile(null);
      return;
    }
    if (picked.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File is too large. Max size is ${MAX_FILE_MB}MB.`);
      setFile(null);
      return;
    }
    setFile(picked);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!form.email.trim()) next.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That does not look like a valid email.";
    if (!form.company.trim()) next.company = "Company or product name is required.";
    if (form.website.trim() && !looksLikeUrl(form.website.trim()))
      next.website = "That does not look like a valid link.";
    if (!form.stage) next.stage = "Pick your stage.";
    if (!form.pitch.trim()) next.pitch = "Tell us what you are building.";
    if (!form.traction.trim()) next.traction = "Evidence of traction is the one thing we need.";
    if (form.proofLink.trim() && !looksLikeUrl(form.proofLink.trim()))
      next.proofLink = "That does not look like a valid link.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const gotcha = (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    if (gotcha) return;

    setStatus("submitting");

    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      console.warn("[ApplyPage] DEMO MODE: set FORMSPREE_ID to actually receive applications.");
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      return;
    }

    try {
      const fd = new FormData();
      fd.append("_subject", `New funding application - ${form.company.trim()}`);
      fd.append("Founder", form.name.trim());
      fd.append("email", form.email.trim());
      fd.append("Company", form.company.trim());
      fd.append("Website", form.website.trim());
      fd.append("Stage", form.stage);
      fd.append("Building", form.pitch.trim());
      fd.append("Traction", form.traction.trim());
      fd.append("Proof link", form.proofLink.trim());
      if (ENABLE_FILE_UPLOAD && file) fd.append("upload", file);

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-ink">
      <header className="mx-auto flex h-[72px] max-w-3xl items-center justify-between px-5">
        
          href="#top"
          onClick={goHome}
          className="inline-flex items-center gap-2 text-[14.5px] text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} />
          Back to site
        </a>
        <span className="font-display text-[16px] font-semibold tracking-tight text-fg">
          Merit Ventures
        </span>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-28 pt-10 md:pt-16">
        {status === "success" ? (
          <div className="card mx-auto max-w-xl p-10 text-center md:p-14">
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(135deg, #6d8cff, #b06cf7)" }}
            >
              <Check size={28} />
            </span>
            <h1 className="display mt-8 text-3xl text-[#e6ebf4] sm:text-4xl">
              Application received.
            </h1>
            <p className="mx-auto mt-5 max-w-sm text-[16px] leading-relaxed text-muted">
              We review every application the same way: on evidence, not introductions. You will
              hear from us either way.
            </p>
            <button
              onClick={() => goHome()}
              className="btn-ghost mt-9 inline-flex items-center rounded-xl px-6 py-3 text-[15px] font-medium"
            >
              Back to site
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Apply for funding</p>
            <h1 className="display mt-5 text-4xl text-[#e6ebf4] sm:text-5xl">
              Show us what you have built.
            </h1>
            <p className="mt-5 font-serif text-lg italic text-muted">
              A short, honest application. No deck polish required.
            </p>

            <form onSubmit={onSubmit} noValidate className="card mt-10 space-y-7 p-7 md:p-10">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Your name *
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Ada Lovelace"
                    className={`${inputCls} ${errors.name ? errBorder : okBorder}`}
                  />
                  <FieldError msg={errors.name} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="you@company.com"
                    className={`${inputCls} ${errors.email ? errBorder : okBorder}`}
                  />
                  <FieldError msg={errors.email} />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelCls}>
                    Company / product name *
                  </label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={(e) => set("company")(e.target.value)}
                    placeholder="Acme"
                    className={`${inputCls} ${errors.company ? errBorder : okBorder}`}
                  />
                  <FieldError msg={errors.company} />
                </div>
                <div>
                  <label htmlFor="website" className={labelCls}>
                    Website or product link
                  </label>
                  <input
                    id="website"
                    value={form.website}
                    onChange={(e) => set("website")(e.target.value)}
                    placeholder="acme.com"
                    className={`${inputCls} ${errors.website ? errBorder : okBorder}`}
                  />
                  <FieldError msg={errors.website} />
                </div>
              </div>

              <div>
                <span className={labelCls}>Stage *</span>
                <div className="flex gap-3">
                  {(["Pre-seed", "Seed"] as Stage[]).map((s) => {
                    const active = form.stage === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => set("stage")(s)}
                        className={`rounded-xl border px-6 py-3 text-[15px] font-medium transition-colors ${
                          active
                            ? "border-[rgba(76,141,255,0.55)] bg-[rgba(76,141,255,0.1)] text-accent"
                            : "border-line bg-panel text-muted hover:text-fg"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <FieldError msg={errors.stage} />
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="pitch" className={labelCls}>
                    What are you building? *
                  </label>
                  <span className="text-[12.5px] text-muted-2">
                    {form.pitch.length}/{PITCH_MAX}
                  </span>
                </div>
                <textarea
                  id="pitch"
                  rows={3}
                  maxLength={PITCH_MAX}
                  value={form.pitch}
                  onChange={(e) => set("pitch")(e.target.value)}
                  placeholder="One or two sentences. Plain language beats buzzwords."
                  className={`${inputCls} resize-none ${errors.pitch ? errBorder : okBorder}`}
                />
                <FieldError msg={errors.pitch} />
              </div>

              <div>
                <label htmlFor="traction" className={labelCls}>
                  Evidence of traction *
                </label>
                <textarea
                  id="traction"
                  rows={4}
                  value={form.traction}
                  onChange={(e) => set("traction")(e.target.value)}
                  placeholder="Users, revenue, growth, retention. Numbers over adjectives."
                  className={`${inputCls} resize-none ${errors.traction ? errBorder : okBorder}`}
                />
                <FieldError msg={errors.traction} />
              </div>

              <div>
                <label htmlFor="proofLink" className={labelCls}>
                  Link to proof
                </label>
                <input
                  id="proofLink"
                  value={form.proofLink}
                  onChange={(e) => set("proofLink")(e.target.value)}
                  placeholder="Dashboard, deck, Loom - anything that shows the numbers"
                  className={`${inputCls} ${errors.proofLink ? errBorder : okBorder}`}
                />
                <FieldError msg={errors.proofLink} />
              </div>

              {ENABLE_FILE_UPLOAD && (
                <div>
                  <span className={labelCls}>Attach proof (optional)</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                  />
                  {file ? (
                    <div className="flex items-center justify-between rounded-xl border border-line bg-panel px-4 py-3">
                      <span className="flex min-w-0 items-center gap-2.5 text-[14.5px] text-fg">
                        <Paperclip size={15} className="shrink-0 text-accent" />
                        <span className="truncate">{file.name}</span>
                        <span className="shrink-0 text-[12.5px] text-muted-2">
                          {(file.size / (1024 * 1024)).toFixed(1)}MB
                        </span>
                      </span>
                      <button
                        type="button"
                        aria-label="Remove file"
                        onClick={() => {
                          setFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="ml-3 shrink-0 text-muted transition-colors hover:text-fg"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="btn-ghost inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-[14.5px]"
                    >
                      <Paperclip size={15} />
                      Choose a file (PDF, PNG or JPG, max {MAX_FILE_MB}MB)
                    </button>
                  )}
                  <FieldError msg={fileError} />
                </div>
              )}

              {status === "error" && (
                <p className="rounded-xl border border-[rgba(241,106,122,0.35)] bg-[rgba(241,106,122,0.08)] px-4 py-3 text-[14px] text-rose">
                  Something went wrong sending your application. Try again in a minute.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-grad inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 text-[16px] font-semibold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? "Submitting..." : "Submit application"}
                {status !== "submitting" && <ArrowRight size={18} />}
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
