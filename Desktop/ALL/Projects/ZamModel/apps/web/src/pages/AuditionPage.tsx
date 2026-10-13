import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ImagePlus,
  LoaderCircle,
} from "lucide-react";
import { request } from "../lib/api";

type Category = { id: number; name: string; slug: string };
type CategoryResponse = { data: Category[] };
type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  categoryId: string;
  bio: string;
};
const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  categoryId: "",
  bio: "",
};

export function AuditionPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    request<CategoryResponse>("/categories")
      .then((result) => setCategories(result.data))
      .catch(() =>
        setError(
          "Could not load audition categories. Please refresh or try again later.",
        ),
      );
  }, []);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }
  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (image) data.append("image", image);
    try {
      const result = await request<{
        data: { payment: { authorizationUrl: string } };
      }>("/registrations", { method: "POST", body: data });
      window.location.assign(result.data.payment.authorizationUrl);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="inner-page audition-page">
      <section className="page-intro compact-intro">
        <span className="eyebrow">YOUR STORY STARTS HERE</span>
        <h1>
          Step into
          <br />
          <em>your spotlight.</em>
        </h1>
        <p>
          Tell us a little about yourself. Our team will be in touch about
          relevant next steps.
        </p>
      </section>
      <section className="form-shell">
        {complete ? (
          <div className="success-state">
            <span className="success-icon">
              <Check size={26} />
            </span>
            <span className="eyebrow">REGISTRATION RECEIVED</span>
            <h2>Thank you, {form.fullName.split(" ")[0]}.</h2>
            <p>
              Your details are with our team. We appreciate you sharing your
              talent with Zam.
            </p>
          </div>
        ) : (
          <>
            <div className="form-progress">
              <div>
                <span>YOUR DETAILS</span>
                <strong>01</strong>
              </div>
              <i
                className={
                  step === 1 ? "progress-line is-complete" : "progress-line"
                }
              />
              <div
                className={
                  step === 1 ? "progress-step active" : "progress-step"
                }
              >
                <span>YOUR TALENT</span>
                <strong>02</strong>
              </div>
            </div>
            <form onSubmit={step === 0 ? next : submit}>
              {step === 0 ? (
                <div className="form-fields">
                  <label>
                    Full name
                    <input
                      required
                      minLength={2}
                      maxLength={160}
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="How should we address you?"
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    Phone number
                    <input
                      required
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Include your country code"
                    />
                  </label>
                  <label>
                    Preferred location
                    <select
                      required
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                    >
                      <option value="">Choose a city</option>
                      <option value="LAGOS">Lagos</option>
                      <option value="AWKA">Awka</option>
                    </select>
                  </label>
                </div>
              ) : (
                <div className="form-fields">
                  <label>
                    Talent category
                    <select
                      required
                      value={form.categoryId}
                      onChange={(e) => update("categoryId", e.target.value)}
                    >
                      <option value="">Choose your discipline</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="full-field">
                    Tell us about your talent
                    <textarea
                      required
                      minLength={20}
                      maxLength={3000}
                      rows={5}
                      value={form.bio}
                      onChange={(e) => update("bio", e.target.value)}
                      placeholder="What do you love to do? What experience or training have you had?"
                    />
                    <small>{form.bio.length}/3000</small>
                  </label>
                  <label className="upload-field full-field">
                    <span className="upload-icon">
                      <ImagePlus size={21} />
                    </span>
                    <span>
                      <strong>
                        {image ? image.name : "Add a portrait (optional)"}
                      </strong>
                      <small>JPG, PNG or WEBP · up to 8 MB</small>
                    </span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
              )}
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <div className="form-actions">
                {step === 1 && (
                  <button
                    type="button"
                    className="button button-text"
                    onClick={() => {
                      setStep(0);
                      setError("");
                    }}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                <button
                  className="button button-dark"
                  type="submit"
                  disabled={loading || (step === 1 && !categories.length)}
                >
                  {loading ? (
                    <>
                      <LoaderCircle className="spin" size={17} /> Sending
                    </>
                  ) : step === 0 ? (
                    <>
                      Continue <ArrowRight size={16} />
                    </>
                  ) : (
                    <>
                      Continue to payment · ₦5,000 <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
            <p className="privacy-note">
              Your details are used to review this registration and contact you
              about relevant opportunities.
            </p>
          </>
        )}
      </section>
    </div>
  );
}
