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
      next.proofLink = "That does not
