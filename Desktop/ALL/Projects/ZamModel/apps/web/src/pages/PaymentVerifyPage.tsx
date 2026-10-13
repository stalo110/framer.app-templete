import { useEffect, useState } from "react";
import { ArrowRight, Check, LoaderCircle, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { request } from "../lib/api";

type PaymentResult = {
  reference: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  amountKobo: number;
  currency: string;
};

export function PaymentVerifyPage() {
  const [params] = useSearchParams();
  const reference = params.get("reference") ?? "";
  const [payment, setPayment] = useState<PaymentResult | null>(null);
  const [error, setError] = useState("");
  const registrationId = params.get("registrationId");

  useEffect(() => {
    let active = true;
    if (!reference) {
      setError("No payment reference was returned.");
      return () => { active = false; };
    }
    async function verify(attempt = 0) {
      try {
        const result = await request<{ data: PaymentResult }>("/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        });
        if (!active) return;
        setPayment(result.data);
        if (result.data.status === "PENDING" && attempt < 4) {
          window.setTimeout(() => void verify(attempt + 1), 2500);
        }
      } catch (reason) {
        if (active) setError(reason instanceof Error ? reason.message : "Payment could not be verified.");
      }
    }
    void verify();
    return () => { active = false; };
  }, [reference]);

  const successful = payment?.status === "SUCCESS";
  const failed = payment?.status === "FAILED";
  return (
    <div className="inner-page payment-page">
      <section className="payment-result" aria-live="polite">
        {(!payment || payment.status === "PENDING") && !error && <LoaderCircle className="spin payment-state-icon" size={34} />}
        {successful && <span className="success-icon"><Check size={26} /></span>}
        {failed && <span className="payment-failed-icon"><X size={24} /></span>}
        {error && <span className="payment-failed-icon"><X size={24} /></span>}
        <span className="eyebrow">{successful ? "PAYMENT CONFIRMED" : failed || error ? "PAYMENT NOT COMPLETED" : payment?.status === "PENDING" ? "PAYMENT PROCESSING" : "VERIFYING PAYMENT"}</span>
        <h1>{successful ? "You're all set." : failed || error ? "Let's try that again." : "Confirming your payment."}</h1>
        <p>{successful
          ? `We verified your ₦${((payment?.amountKobo ?? 0) / 100).toLocaleString("en-NG")} payment with Paystack. Your reference is ${payment?.reference}.`
          : failed || error
            ? error || "Paystack reports that this transaction was not completed. You have not been charged for a successful registration."
            : payment?.status === "PENDING" ? "Paystack is still processing this transaction. We’ll check again shortly; a pending payment is not yet a confirmed registration."
              : "We’re checking the transaction directly with Paystack. Please keep this page open."}</p>
        {(failed || error) && <Link className="button button-dark" to="/events">Return to events <ArrowRight size={16} /></Link>}
        {successful && (registrationId
          ? <Link className="button button-dark" to="/about">Explore Zam <ArrowRight size={16} /></Link>
          : <Link className="button button-dark" to="/events">Back to events <ArrowRight size={16} /></Link>)}
      </section>
    </div>
  );
}
